This file provides guidance to AI coding agents like Claude Code (claude.ai/code), Cursor AI, Codex, Gemini CLI, GitHub Copilot, and other AI coding assistants when working with code in this repository.

# My Blog - Agent Guide

## Project Overview

This is an **Eleventy (11ty) static site** for a personal portfolio and technical blog. Content is written in Markdown with frontmatter, rendered using Nunjucks templates, and auto-deployed to GitHub Pages.

**Key Technology:** Eleventy 2.0+, Nunjucks templating, Markdown content, GitHub Pages deployment

## Development Commands

```bash
# Development server with live reload
npm start                # Serves at http://localhost:8080

# Build for production
npm run build            # Output to _site/

# Clean build artifacts
npm run clean            # Removes _site/

# Full rebuild
npm run clean && npm run build
```

## Architecture

### Content Flow
```
Markdown files (src/articles/*.md)
  ↓ [Gray-matter parses frontmatter]
  ↓ [Eleventy processes with Nunjucks template]
  ↓ [Markdown-it renders content with syntax highlighting]
  ↓ [Output to _site/ with pathPrefix: /my-blog/]
```

### Directory Structure
```
src/
├── articles/           # Article content (*.md) - Each article must start with YYYY-MM-DD
│   └── TEMPLATE.md     # Template for new articles - USE THIS
├── _layouts/           # Nunjucks templates
│   ├── base.njk        # Base HTML structure
│   └── article.njk     # Article-specific layout (extends base)
├── _includes/          # Reusable Nunjucks components
│   ├── header.njk      # Site header with navigation
│   └── footer.njk      # Site footer
├── _data/              # Global site data
│   └── metadata.json   # Site config (title, URL, navigation, theme)
└── assets/             # Static files (CSS, JS, images) - copied as-is

_site/                  # Build output (gitignored) - DO NOT EDIT
```

### Collections (Eleventy concept)
- **articles**: All files in `src/articles/*.md` (reversed, newest first)
- **tagList**: Auto-generated from all article tags, excluding system tags (all, nav, post, posts)

### Filters (available in templates)
- `dateISO` - Converts date to ISO 8601 format
- `dateReadable` - Formats as "Month Day, Year" (e.g., "January 8, 2025")

### Configuration (.eleventy.js)
- **pathPrefix**: `/my-blog/` - Important for GitHub Pages deployment
- **Template engines**: Nunjucks for HTML/layouts, Markdown-it for content
- **Plugins**: RSS feed generation, syntax highlighting (Prism.js)
- **Passthrough**: Static assets copied from `src/assets/` to `_site/`

## Creating New Articles

**Always use the template:**
```bash
cp src/articles/TEMPLATE.md src/articles/YYYY-MM-DD-your-title.md
```

### Required Frontmatter
```yaml
---
layout: article.njk                    # REQUIRED - Must be this exact value
title: "Your Article Title"           # REQUIRED - 50-60 chars for SEO
date: YYYY-MM-DD                       # REQUIRED - ISO format
category: Code Quality                 # REQUIRED - See categories below
tags:                                  # REQUIRED - Must include "articles"
  - articles
  - your-tag
author: Your Name                      # Optional
description: "Brief summary"          # Recommended - Max 160 chars
---
```

### Valid Categories (choose ONE)
- Code Quality
- CI/CD
- AI Tools
- Security
- Performance
- Career

### Article Structure (from TEMPLATE.md)
1. Overview / What You'll Learn
2. Prerequisites
3. Setup / Configuration (step-by-step)
4. Implementation / Usage
5. Best Practices
6. Troubleshooting
7. Resources
8. Conclusion

## Deployment

**Auto-deployment:** Push to `feat/v1.0.0` branch triggers GitHub Actions
- Workflow: `.github/workflows/deploy.yml`
- Build: `npm ci && npm run build`
- Deploy: Uploads `_site/` to GitHub Pages
- **Note:** Main branch is NOT deployed - only `feat/v1.0.0`

**Manual testing before push:**
```bash
npm run build
# Check _site/ output
# Verify no build errors
```

## Common Pitfalls

1. **Incorrect article filename**: Must start with `YYYY-MM-DD-` or it won't be sorted correctly
2. **Missing "articles" tag**: Articles won't appear in collections without it
3. **Wrong layout**: Must be `article.njk` not `articles.njk` or `post.njk`
4. **pathPrefix issues**: All internal links must use `{{ url }}` filter for correct paths
5. **Forgotten build**: Always run `npm run build` to verify before committing

## Testing Changes

```bash
# Start dev server
npm start

# Check these URLs locally:
http://localhost:8080/my-blog/              # Homepage
http://localhost:8080/my-blog/articles/     # Articles list
http://localhost:8080/my-blog/articles/your-article/  # Individual article
```

## Eleventy-Specific Rules

- **Markdown files** in `src/` become HTML pages at the same path
- **Frontmatter** defines template and data for each page
- **Collections** are defined in `.eleventy.js` using glob patterns
- **Nunjucks templates** can access page data via `{{ title }}`, `{{ content }}`, etc.
- **Data cascade**: Files inherit from `_data/`, then folder-level data, then file frontmatter
- **Output**: One HTML file per Markdown file, maintaining directory structure

## Code Style

### Markdown
- Use fenced code blocks with language specification: ```bash, ```javascript, ```yaml
- Use `**bold**` for important terms, `*italic*` for emphasis, `` `code` `` for inline code
- Keep paragraphs short (3-4 sentences max)

### Frontmatter
- Use double quotes for strings
- Date must be YYYY-MM-DD format
- Tags must be array format (with hyphens)

### Templates (Nunjucks)
- Use `{{ variable }}` for output
- Use `{% if/for %}` for logic
- Always use `| safe` filter when outputting HTML content
- Use `| url` filter for internal links to respect pathPrefix
