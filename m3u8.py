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
    ),
    'fs1': Channel(
        name='FS1',
        url='https://kleanembed.online/embed/j7xysrst3ytbc4h50of84mmbyrn4ba9v',
        id='j7xysrst3ytbc4h50of84mmbyrn4ba9v',
        html_file='shows/fs1.html'
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
        
        # Handle both comment patterns that might be before the m3u8 URL
        patterns = [
            # Pattern for commented line before the URL
            r'(//.*?\n\s*const\s+m3u8StreamUrl\s*=\s*")([^"]*)(";)',
            # Pattern for just the URL line
            r'(const\s+m3u8StreamUrl\s*=\s*")([^"]*)(";)'
        ]
        
        updated_html = content
        for pattern in patterns:
            # First clean up any duplicate URLs
            cleaned_content = re.sub(
                pattern,
                r'\1\2\3',
                updated_html
            )
            
            # Then update with the new URL
            updated_html = re.sub(
                pattern,
                f'\\1{m3u8_url}\\3',
                cleaned_content
            )
            
            # If we made changes, no need to try other patterns
            if cleaned_content != updated_html:
                break
        
        with open(html_path, 'w', encoding='utf-8') as file:
            file.write(updated_html)
        
        print(f"Successfully updated {channel.name} HTML")
        
        # Update multistream.js
        if os.path.exists(multistream_js_path):
            print(f"Updating multistream.js at: {multistream_js_path}")
            with open(multistream_js_path, 'r', encoding='utf-8') as file:
                js_content = file.read()
            
            # Find and replace the channel URL in the channels array
            if channel.name == 'ESPN':
                pattern = r'(\{ name: "ESPN", url: \")([^\"]*)(\", type: \"m3u8\" \})'
            elif channel.name == 'FS1':
                pattern = r'(\{ name: "FS1", url: \")([^\"]*)(\", type: \"m3u8\" \})'
            
            updated_js = re.sub(
                pattern,
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
            print("\nFound m3u8 URL:")
            print(m3u8_url)
            
            # Update the HTML file if it exists
            if channel.html_file:
                print(f"\nUpdating {channel.html_file}...")
                if update_channel_html(channel, m3u8_url):
                    print(f"Successfully updated {channel.html_file}")
                else:
                    print(f"Failed to update {channel.html_file}")
            else:
                print(f"No HTML file specified for {channel.name}, skipping update")
        else:
            print("\n❌ Failed to find a valid m3u8 URL")

if __name__ == "__main__":
    main()
