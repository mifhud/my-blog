# GitHub Pages Structure Overview

## 📁 Complete Directory Structure

```
github-pages/
│
├── .github/
│   └── workflows/
│       └── jekyll-deploy.yml      # Automated GitHub Pages deployment
│
├── _articles/                      # ✍️ Your articles go here
│   ├── TEMPLATE.md                 # Template for new articles
│   └── 2025-01-08-sonarqube-issue-fixing-playbook.md
│
├── _includes/                      # 🧩 Reusable components
│   ├── header.html                 # Site header with navigation
│   └── footer.html                 # Site footer
│
├── _layouts/                       # 📄 Page templates
│   ├── default.html                # Base layout for all pages
│   └── article.html                # Layout for article pages
│
├── assets/                         # 🎨 Static resources
│   ├── css/
│   │   └── style.css              # Main stylesheet
│   ├── js/
│   │   └── main.js                # JavaScript functionality
│   └── images/                    # Images folder (create as needed)
│
├── _config.yml                    # ⚙️ Jekyll configuration
├── .gitignore                     # Git ignore rules
├── Gemfile                        # Ruby dependencies
├── index.md                       # 🏠 Homepage
├── articles.md                    # 📚 Articles listing page
├── about.md                       # ℹ️ About page
├── README.md                      # 📖 Complete documentation
├── CONTRIBUTING.md                # 🤝 Contribution guidelines
└── QUICKSTART.md                  # 🚀 Quick start guide
```

## 📝 File Descriptions

### Configuration Files

#### `_config.yml`
Jekyll configuration file containing:
- Site title and description
- Author information
- Collections setup
- Navigation menu
- Plugin configuration

#### `Gemfile`
Ruby dependencies including:
- Jekyll
- Jekyll plugins (SEO, Feed)
- Platform-specific gems

#### `.gitignore`
Excludes from version control:
- Jekyll build files
- Cache directories
- System files

### Layout Files

#### `_layouts/default.html`
Base template for all pages:
- HTML structure
- Header and footer includes
- CSS and JavaScript loading

#### `_layouts/article.html`
Specialized layout for articles:
- Article metadata display
- Content formatting
- Navigation between articles

### Include Files

#### `_includes/header.html`
Site header containing:
- Logo and site title
- Navigation menu
- Mobile menu toggle

#### `_includes/footer.html`
Site footer with:
- Quick links
- Social links
- Copyright information

### Content Pages

#### `index.md`
Homepage featuring:
- Latest articles grid
- Category overview
- Call-to-action

#### `articles.md`
All articles listing with:
- Category filtering
- Search functionality
- Article cards

#### `about.md`
About page describing:
- Site mission
- What readers will find
- How to contribute

### Article Files

#### `_articles/TEMPLATE.md`
Article template including:
- Frontmatter structure
- Section templates
- Code example formats

#### `_articles/2025-01-08-sonarqube-issue-fixing-playbook.md`
Example article demonstrating:
- Complete article structure
- Best practices
- Full documentation

### Asset Files

#### `assets/css/style.css`
Main stylesheet with:
- CSS variables for theming
- Responsive design
- Component styles
- Dark mode support

#### `assets/js/main.js`
JavaScript features:
- Mobile menu toggle
- Code copy buttons
- Smooth scrolling

### Documentation Files

#### `README.md`
Complete documentation:
- Setup instructions
- Article creation guide
- Deployment process
- Troubleshooting

#### `CONTRIBUTING.md`
Contributor guidelines:
- How to contribute
- Article standards
- Review process
- Code of conduct

#### `QUICKSTART.md`
Quick start guide:
- 5-minute setup
- First article
- Common tasks
- Pro tips

### Workflow Files

#### `.github/workflows/jekyll-deploy.yml`
Automated deployment:
- Build on push
- Deploy to GitHub Pages
- Environment configuration

## 🎯 How to Use This Structure

### For Writing Articles

1. **Copy template:**
   ```bash
   cp _articles/TEMPLATE.md _articles/YYYY-MM-DD-your-title.md
   ```

2. **Edit frontmatter and content**

3. **Test locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Commit and push:**
   ```bash
   git add _articles/
   git commit -m "Add new article"
   git push
   ```

### For Customization

#### Change Colors
Edit `assets/css/style.css`:
```css
:root {
  --primary-color: #yourcolor;
}
```

#### Update Navigation
Edit `_config.yml`:
```yaml
navigation:
  - title: Your Link
    url: /path/
```

#### Add New Pages
Create `new-page.md`:
```yaml
---
layout: default
title: Page Title
---
Content here...
```

### For Deployment

#### Local Development
```bash
# Install
bundle install

# Run
bundle exec jekyll serve

# View
open http://localhost:4000
```

#### GitHub Pages
1. Push to GitHub
2. Enable Pages in Settings
3. Select `main` branch
4. Done! Auto-deploys on push

## 📊 Content Organization

### Articles Collection
- Location: `_articles/`
- Naming: `YYYY-MM-DD-slug.md`
- Output: `/articles/slug/`

### Categories
- Code Quality
- CI/CD
- DevOps
- AI Tools
- Security
- Performance

### Tags
- Multiple per article
- Used for filtering
- Displayed on article pages

## 🔧 Customization Points

### Theme Colors
`assets/css/style.css` → CSS variables

### Site Information
`_config.yml` → title, description, author

### Navigation Menu
`_config.yml` → navigation array

### Header/Footer
`_includes/header.html` and `footer.html`

### Page Layouts
`_layouts/default.html` and `article.html`

## 🚀 Workflow Integration

### Local Development
```bash
bundle exec jekyll serve --livereload
```
- Auto-reload on changes
- Fast iteration
- Immediate feedback

### Version Control
```bash
git add .
git commit -m "message"
git push
```
- Track changes
- Collaborate
- Deploy automatically

### Continuous Deployment
- GitHub Actions workflow
- Automatic builds
- No manual deployment needed

## 📚 Key Features

### SEO Optimized
- Meta descriptions
- Jekyll SEO plugin
- Sitemap generation
- RSS feed

### Responsive Design
- Mobile-first
- Tablet optimized
- Desktop enhanced

### Developer Friendly
- Clear structure
- Well documented
- Easy to extend
- Template-based

### Content Focused
- Article-first design
- Easy navigation
- Search and filtering
- Related articles

## 🎓 Learning Path

### Beginner
1. Read QUICKSTART.md
2. Run locally
3. Create first article from template
4. Deploy to GitHub Pages

### Intermediate
1. Customize colors and fonts
2. Add new pages
3. Modify layouts
4. Create custom includes

### Advanced
1. Add new collections
2. Create custom plugins
3. Implement advanced features
4. Optimize performance

## 💡 Best Practices

### Content
- Use templates
- Write descriptive titles
- Add meta descriptions
- Include code examples
- Link to resources

### Development
- Test locally first
- Use semantic HTML
- Follow accessibility guidelines
- Optimize images
- Minimize dependencies

### Deployment
- Commit often
- Write clear commit messages
- Review before pushing
- Monitor GitHub Actions
- Check live site

## 🆘 Common Tasks

### Add Article
```bash
cp _articles/TEMPLATE.md _articles/$(date +%Y-%m-%d)-title.md
```

### Update Styles
```bash
nano assets/css/style.css
bundle exec jekyll serve --livereload
```

### Change Config
```bash
nano _config.yml
# Restart Jekyll server
```

### Deploy Changes
```bash
git add .
git commit -m "Update: description"
git push
```

## 📖 Documentation Hierarchy

1. **QUICKSTART.md** - Get started in 5 minutes
2. **README.md** - Complete reference guide
3. **CONTRIBUTING.md** - How to contribute
4. **This file** - Structure overview

## 🎯 Next Steps

1. ✅ Review structure
2. ✅ Read QUICKSTART.md
3. ✅ Set up locally
4. ✅ Create first article
5. ✅ Deploy to GitHub Pages
6. ✅ Share your knowledge!

---

**Your GitHub Pages site is ready!** 🎉

Start creating articles and sharing your DevOps knowledge with the world.
