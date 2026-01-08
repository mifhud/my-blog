# ⚡ Quick Start Guide - DevOps Playbooks

Get your site running in **3 minutes**!

## 🚀 Step 1: Install (30 seconds)

```bash
# Navigate to project folder
cd github-pages-node

# Install dependencies
npm install
```

## ▶️ Step 2: Start (10 seconds)

```bash
# Start development server
npm start
```

**Done!** Open your browser to: **http://localhost:8080**

## ✍️ Step 3: Create Your First Article (2 minutes)

```bash
# Copy template
cp src/articles/TEMPLATE.md src/articles/2025-01-08-my-first-article.md

# Edit with your favorite editor
code src/articles/2025-01-08-my-first-article.md
# or
nano src/articles/2025-01-08-my-first-article.md
```

### Update the Frontmatter

```yaml
---
layout: article.njk
title: "My First DevOps Playbook"
date: 2025-01-08
category: DevOps
tags:
  - articles
  - tutorial
  - beginner
author: Your Name
description: "My first article on DevOps Playbooks site"
---
```

### Write Your Content

```markdown
## Introduction

This is my first article...

## Setup

Let me show you how to...

```bash
echo "Hello World"
```

## Conclusion

That's it! Easy, right?
```

**Save the file** → Changes appear instantly in browser! 🎉

## 🎨 Step 4: Customize Site Info (1 minute)

Edit `src/_data/metadata.json`:

```json
{
  "title": "My DevOps Blog",
  "description": "Technical guides and playbooks",
  "author": {
    "name": "Your Name",
    "email": "your@email.com",
    "github": "yourusername"
  }
}
```

## 🌐 Step 5: Deploy to GitHub Pages (5 minutes)

### Initialize Git

```bash
# If not already a git repo
git init
git add .
git commit -m "Initial commit"
```

### Create GitHub Repository

1. Go to **github.com/new**
2. Name: `devops-playbooks` (or anything you like)
3. **Don't** initialize with README (we already have files)
4. Click **Create repository**

### Push to GitHub

```bash
# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/devops-playbooks.git

# Push
git push -u origin main
```

### Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in sidebar
3. Under "Build and deployment":
   - Source: **GitHub Actions** ✅
4. Click **Save**

**Done!** Your site will be live at:
```
https://yourusername.github.io/devops-playbooks
```

First deployment takes 2-3 minutes. Check **Actions** tab to see progress.

## 🎯 Common Commands

```bash
# Development
npm start              # Start dev server (with hot reload)
npm run build          # Build for production
npm run clean          # Clean build directory

# Git
git add .              # Stage changes
git commit -m "msg"    # Commit changes
git push               # Deploy to GitHub (auto-deploys site!)
```

## 📝 Writing Workflow

1. **Create article:**
   ```bash
   cp src/articles/TEMPLATE.md src/articles/$(date +%Y-%m-%d)-title.md
   ```

2. **Edit article:**
   - Update frontmatter
   - Write content
   - Save (auto-reloads!)

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add article: Title"
   git push
   ```

That's it! Article is live in 2-3 minutes.

## 🎨 Quick Customizations

### Change Colors

Edit `src/assets/css/style.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Add Navigation Item

Edit `src/_data/metadata.json`:

```json
{
  "navigation": [
    { "title": "Home", "url": "/" },
    { "title": "Articles", "url": "/articles/" },
    { "title": "New Page", "url": "/new-page/" }
  ]
}
```

Create `src/new-page.md`:

```markdown
---
layout: base.njk
title: New Page
---

# New Page Content
```

## 🐛 Quick Fixes

### Port in use?
```bash
npx @11ty/eleventy --serve --port=8081
```

### Changes not showing?
```bash
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Build error?
```bash
npm run clean
npm install
npm start
```

## 📚 Learn More

- **Full Documentation**: [README.md](README.md)
- **Article Template**: [src/articles/TEMPLATE.md](src/articles/TEMPLATE.md)
- **Example Article**: [src/articles/2025-01-08-sonarqube-playbook.md](src/articles/2025-01-08-sonarqube-playbook.md)
- **Eleventy Docs**: [11ty.dev/docs](https://www.11ty.dev/docs/)

## ✅ Quick Checklist

Setup:
- ✅ `npm install`
- ✅ `npm start`
- ✅ View at localhost:8080

Customize:
- ✅ Edit `src/_data/metadata.json`
- ✅ Update colors in `style.css`

Write:
- ✅ Copy TEMPLATE.md
- ✅ Update frontmatter
- ✅ Write content
- ✅ Save & preview

Deploy:
- ✅ `git init` & `git add .`
- ✅ Create GitHub repo
- ✅ `git push`
- ✅ Enable GitHub Pages (Actions)
- ✅ Visit live site!

## 🎉 That's It!

You now have:
- ✅ Modern static site
- ✅ Article system
- ✅ Auto-deployment
- ✅ Hot reload development
- ✅ SEO optimized
- ✅ Fast build times

**Start writing and sharing your knowledge!** 📝

---

Need help? Check [README.md](README.md) or open an issue!

**Happy coding!** 🚀
