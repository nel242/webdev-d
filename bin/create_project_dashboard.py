#!/usr/bin/env python3
import os
import html
from pathlib import Path
from datetime import datetime

SUPPORTED_THUMBS = ("thumbnail.png", "thumbnail.jpg", "thumbnail.jpeg", "thumbnail.webp")

def read_project_description(project_dir: Path, max_len: int = 140) -> str:
    """
    Priority:
      1) description.txt (first non-empty line)
      2) README.md (first non-empty, non-heading line)
      3) fallback text
    """
    desc_file = project_dir / "description.txt"
    readme_file = project_dir / "README.md"

    def first_non_empty_line(p: Path) -> str | None:
        try:
            with p.open("r", encoding="utf-8", errors="replace") as f:
                for line in f:
                    line = line.strip()
                    if line:
                        return line
        except OSError:
            return None
        return None

    desc = first_non_empty_line(desc_file)
    if desc:
        return (desc[:max_len] + "…") if len(desc) > max_len else desc

    # README: skip headings like "# Title"
    try:
        if readme_file.exists():
            with readme_file.open("r", encoding="utf-8", errors="replace") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    if line.startswith("#"):
                        continue
                    return (line[:max_len] + "…") if len(line) > max_len else line
    except OSError:
        pass

    return "Click to open this project."

def find_thumbnail(project_dir: Path) -> str | None:
    """
    Returns a relative path (string) to thumbnail if present, else None.
    """
    for name in SUPPORTED_THUMBS:
        p = project_dir / name
        if p.exists():
            return f"{project_dir.name}/{name}"
    return None

def format_mtime(path: Path) -> str:
    try:
        ts = path.stat().st_mtime
        return datetime.fromtimestamp(ts).strftime("%b %d, %Y %I:%M %p")
    except OSError:
        return "Unknown"

def create_portfolio_dashboard():
    """
    Scans current directory for subdirectories (projects) that contain index.html
    and generates a portfolio-style index.html with linked project cards.
    """
    root = Path(".").resolve()
    output_file = root / "index.html"

    # Gather projects: directories with index.html
    projects = []
    for item in root.iterdir():
        if item.is_dir():
            index_path = item / "index.html"
            if index_path.exists():
                projects.append(item)

    # Sort by most recently updated (project index.html mtime), newest first
    projects.sort(
        key=lambda d: (d / "index.html").stat().st_mtime if (d / "index.html").exists() else 0,
        reverse=True,
    )

    generated_at = datetime.now().strftime("%b %d, %Y %I:%M %p")

    css_style = """
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f9;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }
        header {
            text-align: center;
            margin-bottom: 35px;
            padding-bottom: 20px;
            border-bottom: 3px solid #007bff;
        }
        h1 {
            color: #2c3e50;
            font-size: 2.5em;
            font-weight: 300;
            margin: 0;
        }
        .meta {
            margin-top: 10px;
            color: #6c7a89;
            font-size: 0.95em;
        }
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .project-card {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.10);
            transition: transform 0.2s, box-shadow 0.2s;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            display: block;
        }
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
        }
        .thumb {
            width: 100%;
            height: 165px;
            background: linear-gradient(135deg, rgba(0,123,255,0.20), rgba(44,62,80,0.15));
            display: flex;
            align-items: center;
            justify-content: center;
            color: #2c3e50;
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        .thumb img {
            width: 100%;
            height: 165px;
            object-fit: cover;
            display: block;
        }
        .card-content {
            padding: 18px 20px 20px 20px;
        }
        h2 {
            margin: 0 0 8px 0;
            color: #007bff;
            font-size: 1.35em;
        }
        p {
            margin: 0 0 10px 0;
            color: #5f6f7a;
            font-size: 0.95em;
            line-height: 1.35;
        }
        .updated {
            font-size: 0.85em;
            color: #8a97a3;
        }
        footer {
            text-align: center;
            margin-top: 50px;
            font-size: 0.85em;
            color: #95a5a6;
        }
        code.small {
            background: #eef2f6;
            padding: 2px 6px;
            border-radius: 6px;
        }
    """

    html_parts = []
    html_parts.append(f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Development Portfolio Dashboard</title>
    <style>
{css_style}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>My Web Projects Portfolio</h1>
            <div class="meta">Last generated: <strong>{html.escape(generated_at)}</strong></div>
            <div class="meta">Tip: Add <code class="small">thumbnail.png</code> and/or <code class="small">description.txt</code> inside a project folder.</div>
        </header>

        <section class="project-grid">
""")

    if not projects:
        html_parts.append("""
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <p>No web project directories containing an <strong>index.html</strong> were found.</p>
            </div>
        """)
    else:
        for project_dir in projects:
            project_name = project_dir.name
            display_name = project_name.replace("-", " ").replace("_", " ").title()
            link_path = f"{project_name}/index.html"

            description = read_project_description(project_dir)
            description_html = html.escape(description)

            thumb = find_thumbnail(project_dir)
            thumb_block = ""
            if thumb:
                thumb_block = f'<img src="{html.escape(thumb)}" alt="{html.escape(display_name)} thumbnail">'
            else:
                # Nice fallback if no thumbnail
                thumb_block = f'{html.escape(display_name)}'

            updated_at = format_mtime(project_dir / "index.html")

            html_parts.append(f"""
            <a href="{html.escape(link_path)}" class="project-card">
                <div class="thumb">{thumb_block}</div>
                <div class="card-content">
                    <h2>{html.escape(display_name)}</h2>
                    <p>{description_html}</p>
                    <div class="updated">Updated: {html.escape(updated_at)}</div>
                </div>
            </a>
""")

    html_parts.append("""
        </section>

        <footer>
            <p>Dashboard generated by a Python script.</p>
        </footer>
    </div>
</body>
</html>
""")

    html_content = "".join(html_parts).strip()

    try:
        output_file.write_text(html_content, encoding="utf-8")
        print(f"Successfully created: {output_file.name}")
        print(f"Total projects linked: {len(projects)}")
        print(f"Generated at: {generated_at}")
    except OSError as e:
        print(f"Error writing to file: {e}")

if __name__ == "__main__":
    create_portfolio_dashboard()
