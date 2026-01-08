# Quick Start Guide

Get your DevOps Playbooks site up and running in minutes!

## 🚀 5-Minute Setup

### Prerequisites

- Git installed
- Ruby 2.7+ installed
- Bundler gem installed

### Step 1: Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/devops-playbooks.git
cd devops-playbooks

# Install dependencies
bundle install
```

### Step 2: Run Locally

```bash
# Start Jekyll server
bundle exec jekyll serve

# Open in browser
open http://localhost:4000
```

That's it! Your site is now running locally. 🎉

## ✍️ Create Your First Article

### Using the Template

```bash
# Copy the template
cp _articles/TEMPLATE.md _articles/2025-01-08-my-first-article.md

# Edit the file
# - Update frontmatter (title, date, category, tags)
# - Write your content
# - Save the file

# Refresh browser to see your article
```

### Article Structure

```yaml
---
layout: article
title: "My First DevOps Playbook"
date: 2025-01-08
category: DevOps
tags: [tutorial, beginner, guide]
author: Your Name
description: "A quick guide to creating your first playbook article"
---

## Overview
Your introduction here...

## Prerequisites
- Requirement 1
- Requirement 2

## Step-by-Step Guide
Your content here...

## Conclusion
Wrap up your article...
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/yourusername/devops-playbooks.git

# Commit and push
git add .
git commit -m "Initial commit: DevOps Playbooks site"
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Source: **Deploy from a branch**
5. Branch: **main** / **/(root)**
6. Click **Save**

### Step 3: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check **Actions** tab for deployment status
- Your site will be live at: `https://yourusername.github.io/devops-playbooks`

## 📝 Common Tasks

### Add a New Article

```bash
# Create from template
cp _articles/TEMPLATE.md _articles/$(date +%Y-%m-%d)-new-article.md

# Edit the file
nano _articles/$(date +%Y-%m-%d)-new-article.md

# Test locally
bundle exec jekyll serve

# Commit and push
git add _articles/
git commit -m "Add new article: Article Title"
git push
```

### Update Site Configuration

Edit `_config.yml`:

```yaml
title: Your Site Title
description: Your description
author:
  name: Your Name
  email: your.email@example.com
```

### Add Navigation Link

Edit `_config.yml`:

```yaml
navigation:
  - title: Home
    url: /
  - title: Articles
    url: /articles/
  - title: New Page
    url: /new-page/
```

### Customize Colors

Edit `assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb;  /* Change this */
  --secondary-color: #1e40af; /* And this */
}
```

## 🐛 Troubleshooting

### "Bundle install" fails

```bash
# Update bundler
gem install bundler

# Try again
bundle install
```

### "Jekyll serve" fails

```bash
# Check Ruby version (need 2.7+)
ruby --version

# Install webrick (needed for Ruby 3.0+)
bundle add webrick

# Try again
bundle exec jekyll serve
```

### Changes not showing

```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf _site .jekyll-cache

# Restart server
bundle exec jekyll serve
```

### GitHub Pages not updating

1. Check **Actions** tab for errors
2. Wait 5-10 minutes for deployment
3. Clear browser cache
4. Try incognito/private window

## 📚 Next Steps

### Learn More

- Read [README.md](README.md) for complete documentation
- Check [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Browse [Jekyll Docs](https://jekyllrb.com/docs/) for advanced features

### Customize Your Site

- Add custom pages
- Modify layouts and styles
- Add new categories
- Create custom components

### Share Your Knowledge

- Write technical playbooks
- Share DevOps best practices
- Document automation workflows
- Help others learn

## 💡 Pro Tips

### Development Workflow

```bash
# Fast development with auto-reload
bundle exec jekyll serve --livereload

# Build without serving
bundle exec jekyll build

# Draft articles (won't appear in production)
bundle exec jekyll serve --drafts
```

### Article Writing

1. Start with the template
2. Fill in frontmatter first
3. Write in sections
4. Add code examples
5. Test locally before committing
6. Push when ready

### Git Workflow

```bash
# Create feature branch
git checkout -b article/new-topic

# Make changes
# ...

# Commit
git add .
git commit -m "Add article: Topic Name"

# Push and create PR
git push origin article/new-topic
```

## 🎯 Quick Reference

### File Locations

```
_articles/           → Your articles
_layouts/           → Page templates
assets/css/         → Stylesheets
assets/js/          → JavaScript
_config.yml         → Site configuration
```

### Key Commands

```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Run local server
bundle exec jekyll build    # Build site
git add . && git commit     # Save changes
git push                    # Deploy to GitHub
```

### Categories

- Code Quality
- CI/CD
- DevOps
- AI Tools
- Security
- Performance

## 🆘 Need Help?

- **Documentation:** Check [README.md](README.md)
- **Issues:** Open a GitHub issue
- **Questions:** Ask in discussions
- **Examples:** Browse existing articles

---

**Ready to start?** Run `bundle exec jekyll serve` and open `http://localhost:4000`! 🚀
