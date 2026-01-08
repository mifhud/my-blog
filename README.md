# DevOps Playbooks

> Technical playbooks and guides for modern development practices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
# Website available at: http://localhost:8080

# Build for production
npm run build
```

## 📁 Project Structure

```
lms.io/
├── src/                          # Source files
│   ├── articles/                 # Article content
│   │   ├── 2025-01-08-sonarqube-issue-fixing-playbook.md
│   │   └── TEMPLATE.md           # Template for new articles
│   ├── _layouts/                 # Page templates (Nunjucks)
│   │   ├── base.njk              # Base layout
│   │   └── article.njk           # Article layout
│   ├── _includes/                # Reusable components
│   │   ├── header.njk            # Header component
│   │   └── footer.njk            # Footer component
│   ├── _data/                    # Site data
│   │   └── metadata.json         # Site configuration
│   ├── assets/                   # Static assets
│   │   ├── css/style.css         # Styling
│   │   └── js/main.js            # JavaScript
│   ├── index.md                  # Homepage
│   ├── about.md                  # About page
│   ├── articles.md               # Articles listing
│   └── 404.md                    # 404 page
├── .eleventy.js                  # Eleventy configuration
├── package.json                  # Dependencies & scripts
├── .github/workflows/            # GitHub Actions
│   └── deploy.yml                # Auto-deployment
└── README.md                     # This file
```

## ✍️ Creating New Articles

1. **Copy the template:**
   ```bash
   cp src/articles/TEMPLATE.md src/articles/2025-01-08-new-article.md
   ```

2. **Update frontmatter:**
   ```yaml
   ---
   layout: article.njk
   title: "Your Article Title"
   date: 2025-01-08
   category: Code Quality  # Choose: Code Quality | CI/CD | DevOps | AI Tools | Security
   tags:
     - articles
     - tag1
     - tag2
   author: Your Name
   description: "Brief description of your article"
   ---
   ```

3. **Write content in Markdown** with syntax highlighting support

4. **Preview locally:**
   ```bash
   npm start
   ```

## 🌐 Deployment

This site uses **Eleventy (11ty)** static site generator with Node.js and auto-deploys to GitHub Pages.

### Auto-deployment:
1. Push changes to `main` branch
2. GitHub Actions automatically builds and deploys
3. Live at: `https://username.github.io/lms-io`

### Manual deployment:
```bash
npm run build  # Generates _site/ folder
```

## 🛠️ Technology Stack

- **Static Site Generator:** [Eleventy (11ty)](https://11ty.dev/)
- **Template Engine:** Nunjucks
- **Styling:** CSS
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📝 Articles

### Featured Playbooks:

- **[SonarQube Issue Fixing Playbook](src/articles/2025-01-08-sonarqube-issue-fixing-playbook.md)** - Comprehensive guide to fix SonarQube issues using Claude Code AI with MCP server integration

## 📧 Contributing

1. Fork the repository
2. Create a new article using the template
3. Submit a pull request
4. Your article will be reviewed and published

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Node.js and Eleventy**
