import re
import requests
from urllib.parse import urljoin
from dataclasses import dataclass

@dataclass
class Channel:
    name: str
    url: str
    id: str
    html_file: str = ''

# Define your channels here
CHANNELS = {
    'fs2': Channel(
        name='Fox Sports 2',
        url='https://kleanembed.online/embed/9bfdo7kxd45sst08hbuh6rwhkykmitwb',
        id='9bfdo7kxd45sst08hbuh6rwhkykmitwb',
        html_file='fs2.html'
    )
}

def get_m3u8_url(channel):
    try:
        # Set headers to mimic a browser request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://kleanembed.online/'
        }
        
        # Fetch the embed page
        response = requests.get(channel.url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Look for m3u8 URL in the page content
        m3u8_pattern = r'(https?://[^\s"\']+\.m3u8[^\s"\']*)'
        matches = re.findall(m3u8_pattern, response.text)
        
        if matches:
            # Return the first m3u8 URL found
            return matches[0]
        else:
            # If not found directly, look for potential base64 encoded URLs
            print("No direct m3u8 URL found, checking for base64 encoded sources...")
            base64_pattern = r'atob\("([^"]+)"\)'
            base64_matches = re.findall(base64_pattern, response.text)
            
            if base64_matches:
                import base64
                try:
                    decoded = base64.b64decode(base64_matches[0]).decode('utf-8')
                    m3u8_urls = re.findall(m3u8_pattern, decoded)
                    if m3u8_urls:
                        return m3u8_urls[0]
                except Exception as e:
                    print(f"Error decoding base64: {str(e)}")
            
            return None
            
    except Exception:
        return None

def update_channel_html(channel, m3u8_url):
    if not channel.html_file:
        print(f"⚠️ No HTML file specified for {channel.name}")
        return False
        
    try:
        file_path = fr'c:\Users\kbrum\Code\Schooluk\shows\{channel.html_file}'
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find and replace the m3u8 URL in the JavaScript code
        updated_content = re.sub(
            r'(const m3u8StreamUrl = \").*?(\";)',
            f'\\g<1>{m3u8_url}\\g<2>',
            content
        )
        
        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        return True
    except Exception as e:
        print(f"❌ Error updating {channel.name} HTML: {str(e)}")
        return False

def main():
    if not CHANNELS:
        return
    
    # Process each channel
    for channel_id, channel in CHANNELS.items():
        print(f"Fetching m3u8 URL for {channel.name}...")
        result = get_m3u8_url(channel)
        if result and result.startswith('http'):
            print(f"✅ Found m3u8 URL for {channel.name}")
            if channel.html_file:
                print(f"Updating {channel.name} HTML file...")
                if update_channel_html(channel, result):
                    print(f"✅ Successfully updated {channel.name} with new m3u8 URL")
                else:
                    print(f"❌ Failed to update {channel.name} HTML file")
            else:
                print(f"ℹ️ No HTML file specified for {channel.name}, skipping update")

if __name__ == "__main__":
    main()
