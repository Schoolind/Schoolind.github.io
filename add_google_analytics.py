import os

def add_google_analytics_to_file(file_path):
    google_analytics_code = '''<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D1D7WGSDYH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-D1D7WGSDYH');
</script>'''

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Check if Google Analytics is already added
        if 'www.googletagmanager.com/gtag/js' in content:
            print(f'Skipping {file_path} - Google Analytics already exists')
            return

        # Insert the Google Analytics code right after the <head> tag
        if '<head>' in content:
            new_content = content.replace('<head>', f'<head>\n{google_analytics_code}')
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'Updated {file_path}')
        else:
            print(f'Skipping {file_path} - No <head> tag found')

    except Exception as e:
        print(f'Error processing {file_path}: {str(e)}')

def main():
    # Get the current directory
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Walk through all directories and find HTML files
    for root, _, files in os.walk(base_dir):
        # Skip node_modules and other directories you might want to exclude
        if 'node_modules' in root or '.git' in root:
            continue
            
        for file in files:
            if file.lower().endswith('.html'):
                file_path = os.path.join(root, file)
                add_google_analytics_to_file(file_path)

if __name__ == '__main__':
    print('Adding Google Analytics to all HTML files...')
    main()
    print('Done!')
