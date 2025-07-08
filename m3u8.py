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
    'espn': Channel(
        name='ESPN',
        url='https://kleanembed.online/embed/tgcyutly3zujtd3bgef8nevyy5v5n301',
        id='tgcyutly3zujtd3bgef8nevyy5v5n301',
        html_file='shows/espn.html'
    )
}

def get_m3u8_url(channel):
    try:
        # Set headers to mimic a browser request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://kleanembed.online/',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
        }
        
        print(f"Fetching stream URL for {channel.name}...")
        response = requests.get(channel.url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Look for m3u8 URL in the response
        m3u8_pattern = r'https?://[^\s"]+\.m3u8(?:[^\s"]+)?'
        matches = re.findall(m3u8_pattern, response.text)
        
        if matches:
            print(f"Found {len(matches)} potential m3u8 URLs")
            return matches[0]  # Return the first match
            
        # If not found directly, check for base64 encoded strings
        print("No direct m3u8 URL found, checking for encoded sources...")
        base64_pattern = r'atob\(["\']([a-zA-Z0-9+/=]+)["\']\)'
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
        
        print("No m3u8 URL found in the response.")
        return None
            
    except requests.RequestException as e:
        print(f"Error fetching {channel.name} stream: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

def update_channel_html(channel, m3u8_url):
    if not channel.html_file:
        print(f"No HTML file specified for {channel.name}")
        return False
        
    try:
        import os
        # Get the full path to the HTML file
        script_dir = os.path.dirname(os.path.abspath(__file__))
        html_path = os.path.abspath(os.path.join(script_dir, channel.html_file))
        
        # Path to multistream.js
        multistream_js_path = os.path.abspath(os.path.join(script_dir, 'scripts', 'multistream.js'))
        
        # Update HTML file
        print(f"Updating HTML file at: {html_path}")
        with open(html_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find and replace the m3u8 URL in the JavaScript code
        updated_html = re.sub(
            r'(const\s+m3u8StreamUrl\s*=\s*")([^"]*)(";)',
            f'\\1{m3u8_url}\\2\\3',
            content
        )
        
        with open(html_path, 'w', encoding='utf-8') as file:
            file.write(updated_html)
        
        print(f"Successfully updated {channel.name} HTML")
        
        # Update multistream.js
        if os.path.exists(multistream_js_path):
            print(f"Updating multistream.js at: {multistream_js_path}")
            with open(multistream_js_path, 'r', encoding='utf-8') as file:
                js_content = file.read()
            
            # Find and replace the ESPN URL in the channels array
            updated_js = re.sub(
                r'(\{ name: "ESPN", url: \")([^\"]*)(\", type: \"iframe\" \})',
                f'\\1{m3u8_url}\\3',
                js_content
            )
            
            with open(multistream_js_path, 'w', encoding='utf-8') as file:
                file.write(updated_js)
            
            print("Successfully updated multistream.js")
        
        return True
    except Exception as e:
        print(f"Error updating files: {str(e)}")
        return False

def main():
    if not CHANNELS:
        print("No channels configured.")
        return
    
    # Process each channel
    for channel_id, channel in CHANNELS.items():
        print(f"\n{'='*50}")
        print(f"Processing channel: {channel.name}")
        print(f"URL: {channel.url}")
        print("="*50)
        
        # Get the m3u8 URL
        m3u8_url = get_m3u8_url(channel)
        
        if m3u8_url and m3u8_url.startswith('http'):
            print(f"\n✅ Found m3u8 URL:")
            print(m3u8_url)
            
            # Update the HTML file if it exists
            if channel.html_file:
                print(f"\nUpdating {channel.html_file}...")
                if update_channel_html(channel, m3u8_url):
                    print(f"✅ Successfully updated {channel.html_file}")
                else:
                    print(f"❌ Failed to update {channel.html_file}")
            else:
                print(f"ℹ️ No HTML file specified for {channel.name}, skipping update")
        else:
            print("\n❌ Failed to find a valid m3u8 URL")

if __name__ == "__main__":
    main()
