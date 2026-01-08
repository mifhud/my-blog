# DevOps Playbooks - GitHub Pages Site

A collection of technical playbooks and guides for modern development practices, built with Jekyll and hosted on GitHub Pages.

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**
   ```bash
   bundle install
   ```

2. **Run Local Server**
   ```bash
   bundle exec jekyll serve
   ```

3. **View Site**
   Open your browser to `http://localhost:4000`

### First Time Setup

If you don't have Ruby and Jekyll installed:

```bash
# Install Ruby (macOS)
brew install ruby

# Install Jekyll and Bundler
gem install jekyll bundler

# Navigate to project directory
cd github-pages

# Install dependencies
bundle install
```

## 📁 Directory Structure

```
github-pages/
├── _articles/              # Article collection (Jekyll)
│   └── 2025-01-08-sonarqube-issue-fixing-playbook.md
├── _includes/              # Reusable components
│   ├── header.html
│   └── footer.html
├── _layouts/               # Page layouts
│   ├── default.html
│   └── article.html
├── assets/                 # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── _config.yml            # Jekyll configuration
├── index.md               # Homepage
├── articles.md            # Articles listing page
├── about.md               # About page
├── Gemfile                # Ruby dependencies
└── README.md             # This file
```

## ✍️ Creating New Articles

### Method 1: Using the Template

1. **Copy Template**
   ```bash
   cp _articles/TEMPLATE.md _articles/YYYY-MM-DD-your-article-title.md
   ```

2. **Edit Frontmatter**
   ```yaml
   ---
   layout: article
   title: "Your Article Title"
   date: YYYY-MM-DD
   category: Category Name
   tags: [tag1, tag2, tag3]
   author: Your Name
   description: "Brief description for SEO and previews"
   ---
   ```

3. **Write Content**
   Write your article content in Markdown format.

4. **Preview Locally**
   ```bash
   bundle exec jekyll serve
   ```

### Method 2: Manual Creation

Create a new file in `_articles/` with the following naming convention:
```
_articles/YYYY-MM-DD-article-slug.md
```

**Example:**
```
_articles/2025-01-08-docker-best-practices.md
```

### Article Frontmatter Reference

```yaml
---
layout: article                    # Required: Use 'article' layout
title: "Your Article Title"       # Required: Article title
date: 2025-01-08                  # Required: Publication date (YYYY-MM-DD)
category: Code Quality            # Required: Choose from categories below
tags: [tag1, tag2, tag3]         # Optional: Relevant tags
author: Your Name                 # Optional: Author name
description: "Article summary"    # Recommended: For SEO and previews
---
```

### Available Categories

Choose one category for your article:

- **Code Quality** - SonarQube, linting, code reviews, testing
- **CI/CD** - GitHub Actions, deployment, automation
- **DevOps** - Infrastructure, monitoring, containers
- **AI Tools** - Claude Code, MCP, AI-assisted development
- **Security** - Best practices, vulnerability management
- **Performance** - Optimization, profiling, scaling

### Markdown Features

Your articles support:

#### Headers
```markdown
# H1 Header
## H2 Header
### H3 Header
```

#### Code Blocks
```markdown
\```javascript
const example = 'code';
\```

\```bash
echo "Shell commands"
\```
```

#### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

#### Lists
```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

#### Links and Images
```markdown
[Link text](https://example.com)
![Alt text](/assets/images/image.png)
```

#### Blockquotes
```markdown
> This is a quote
```

## 🎨 Customization

### Site Configuration

Edit `_config.yml` to customize:

```yaml
title: Your Site Title
description: Your site description
author:
  name: Your Name
  email: your.email@example.com
```

### Navigation

Edit `_config.yml` to modify navigation:

```yaml
navigation:
  - title: Home
    url: /
  - title: Articles
    url: /articles/
  - title: Custom Page
    url: /custom/
```

### Styling

Main stylesheet: `assets/css/style.css`

CSS variables for easy customization:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-color: #1f2937;
  --bg-color: #ffffff;
}
```

## 🚢 Deployment to GitHub Pages

### GitHub Repository Setup

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repository.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Click Save

3. **Configure Base URL** (if using project site)
   
   Edit `_config.yml`:
   ```yaml
   baseurl: "/repository-name"
   url: "https://username.github.io"
   ```

4. **Access Your Site**
   - User/Organization site: `https://username.github.io`
   - Project site: `https://username.github.io/repository-name`

### Automatic Deployment

GitHub Pages automatically rebuilds your site when you push to the main branch. No additional configuration needed!

### Custom Domain (Optional)

1. Add a `CNAME` file to the root:
   ```bash
   echo "yourdomain.com" > CNAME
   ```

2. Configure DNS with your domain provider:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: CNAME
   Host: www
   Value: username.github.io
   ```

## 📝 Article Template

Create this file as `_articles/TEMPLATE.md`:

```markdown
---
layout: article
title: "Article Title Here"
date: YYYY-MM-DD
category: Code Quality
tags: [tag1, tag2, tag3]
author: Your Name
description: "A brief description of the article for SEO and social media previews. Keep it under 160 characters."
---

## Overview

Brief introduction to what this article covers.

### What You'll Learn

- Key point 1
- Key point 2
- Key point 3

## Prerequisites

- Requirement 1
- Requirement 2

## Main Content

### Section 1

Your content here...

\```bash
# Code examples
echo "Hello World"
\```

### Section 2

More content...

## Best Practices

1. **Practice 1** - Description
2. **Practice 2** - Description

## Conclusion

Summary and key takeaways.

## Resources

- [Link 1](https://example.com)
- [Link 2](https://example.com)
```

## 🔧 Maintenance

### Update Dependencies

```bash
bundle update
```

### Test Before Deploying

```bash
# Build site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# Test all links (optional)
bundle exec htmlproofer ./_site
```

### Check for Broken Links

```bash
# Install html-proofer
gem install html-proofer

# Run check
htmlproofer ./_site
```

## 📊 SEO Optimization

The site includes:
- ✅ Semantic HTML structure
- ✅ Meta descriptions via frontmatter
- ✅ Jekyll SEO plugin
- ✅ RSS feed
- ✅ Sitemap generation
- ✅ Social media tags

To improve SEO for articles:
1. Write descriptive titles (50-60 characters)
2. Add meta descriptions (150-160 characters)
3. Use relevant tags
4. Include internal links
5. Add alt text to images

## 🎯 Article Writing Best Practices

### Title Guidelines
- Be specific and descriptive
- Include key technology/topic
- Keep under 60 characters
- Use title case

### Description Guidelines
- Summarize the article value
- Include main keywords
- Keep under 160 characters
- Make it compelling

### Content Guidelines
- Start with clear overview
- Use code examples
- Include visuals where helpful
- Add practical examples
- Link to resources
- End with actionable takeaways

### Code Examples
- Always specify language
- Keep examples concise
- Add comments for clarity
- Test all code before publishing

## 🐛 Troubleshooting

### Jekyll Build Errors

**Error: Dependency Error**
```bash
bundle install
bundle update
```

**Error: Port Already in Use**
```bash
bundle exec jekyll serve --port 4001
```

**Error: Permission Denied**
```bash
sudo bundle exec jekyll serve
# or
bundle exec jekyll serve --no-watch
```

### GitHub Pages Not Updating

1. Check build status in repository Actions tab
2. Verify `_config.yml` syntax
3. Ensure no Jekyll errors in build log
4. Clear browser cache
5. Wait 5-10 minutes for propagation

## 📚 Resources

### Jekyll Documentation
- [Official Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

### Design Inspiration
- [Jekyll Themes](https://jekyllthemes.io/)
- [GitHub Pages Examples](https://github.com/collections/github-pages-examples)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or suggestions:
- Open an issue on GitHub
- Email: your.email@example.com
- Website: https://yourdomain.com

---

**Happy Writing! 🚀**
