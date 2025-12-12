import os

def create_project_structure():
    """
    Creates the 'project' directory structure including files and subdirectories.
    """
    # Define the base directory name
    base_dir = "project"

    # Define the files to create directly in the base directory
    root_files = ["index.html", "style.css", "script.js"]

    # Define the subdirectories inside 'assets'
    asset_subdirs = ["images", "icons", "fonts", "videos"]

    # Define the assets path
    assets_dir = os.path.join(base_dir, "assets")

    try:
        # 1. Create the base 'project' directory and 'assets' subdirectory
        os.makedirs(assets_dir, exist_ok=True)
        print(f"Created directory: {base_dir}")
        print(f"Created directory: {assets_dir}")

        # 2. Create the files in the base directory
        for filename in root_files:
            file_path = os.path.join(base_dir, filename)
            with open(file_path, 'w') as f:
                # Optionally write a small comment/content to the files
                if filename.endswith(".html"):
                    f.write("")
                elif filename.endswith(".css"):
                    f.write("/* CSS styles go here */")
                elif filename.endswith(".js"):
                    f.write("// JavaScript code goes here")
            print(f"Created file: {file_path}")

        # 3. Create the subdirectories inside 'assets'
        for subdir in asset_subdirs:
            subdir_path = os.path.join(assets_dir, subdir)
            os.makedirs(subdir_path, exist_ok=True)
            print(f"Created directory: {subdir_path}")

        print("\nProject structure created successfully!")

    except OSError as e:
        print(f"Error creating directory structure: {e}")

if __name__ == "__main__":
    create_project_structure()
