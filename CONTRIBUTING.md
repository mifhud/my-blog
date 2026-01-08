# Contributing to DevOps Playbooks

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Quick Contribution Guide

### 1. Setup Development Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/yourusername/devops-playbooks.git
cd devops-playbooks

# Install dependencies
npm install

# Start development server
npm start
```

### 2. Create a New Article

```bash
# Copy template
cp src/articles/TEMPLATE.md src/articles/YYYY-MM-DD-your-title.md

# Edit the file
# - Fill in frontmatter
# - Write your content
# - Save and preview at localhost:8080
```

### 3. Submit Your Contribution

```bash
# Create feature branch
git checkout -b article/your-article-name

# Add your changes
git add .
git commit -m "Add article: Your Article Title"

# Push to your fork
git push origin article/your-article-name

# Create Pull Request on GitHub
```

## 📝 Article Guidelines

### Frontmatter Requirements

```yaml
---
layout: article.njk         # Required
title: "Article Title"      # Required: 50-60 characters
date: YYYY-MM-DD           # Required: Publication date
category: Category Name     # Required: See categories below
tags:                      # Required: Start with "articles"
  - articles
  - tag1
  - tag2
author: Your Name          # Optional
description: "Summary"     # Recommended: 150-160 chars
---
```

### Available Categories

Choose **one**:
- Code Quality
- CI/CD
- DevOps
- AI Tools
- Security
- Performance

### Content Standards

**Required Sections:**
- Overview / Introduction
- Prerequisites
- Step-by-step instructions
- Best practices
- Troubleshooting
- Resources/links
- Conclusion

**Code Examples:**
- Must be tested and working
- Include language specification
- Add comments for clarity
- Show expected output

**Writing Style:**
- Clear and concise
- Professional but approachable
- Short paragraphs (3-4 sentences)
- Use bullet points for lists
- Avoid unexplained jargon

## 🎨 Style Guide

### Markdown Formatting

**Headers:**
```markdown
## H2 for main sections
### H3 for subsections
#### H4 for details
```

**Code Blocks:**
````markdown
```language
code here
```
````

**Emphasis:**
```markdown
**Bold** for important terms
*Italic* for emphasis
`code` for inline code
```

### File Naming

Articles: `YYYY-MM-DD-article-title.md`

Examples:
- `2025-01-08-docker-best-practices.md`
- `2025-01-15-github-actions-guide.md`

## 🔍 Review Process

### Pull Request Checklist

Before submitting:
- [ ] Article follows TEMPLATE.md structure
- [ ] Frontmatter is complete and correct
- [ ] Code examples are tested
- [ ] No spelling/grammar errors
- [ ] Links work correctly
- [ ] Images are optimized (<500KB)
- [ ] Builds successfully (`npm run build`)

### Review Timeline

- Initial review: 2-3 business days
- Feedback/revisions: 1-2 business days
- Merge: After approval

## 🐛 Reporting Issues

### Bug Reports

Include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/OS information

### Feature Requests

Include:
- Description of the feature
- Use case / problem it solves
- Proposed implementation (optional)

## 💡 Contribution Ideas

### Articles Needed

- DevOps automation guides
- CI/CD pipeline tutorials
- Code quality best practices
- Security hardening guides
- Performance optimization tips
- Tool comparison articles

### Site Improvements

- Enhanced search functionality
- Tag cloud visualization
- Reading time estimates
- Related articles suggestions
- Author profiles

## 🎯 Quality Standards

### Technical Accuracy

- Information must be current
- Commands/code must work
- Links must be valid
- Screenshots must be recent

### Originality

- No plagiarism
- Original examples
- Cite sources when referencing
- Add personal insights

### Usefulness

- Solve real problems
- Provide working solutions
- Include practical examples
- Link to resources

## 🤝 Code of Conduct

### Be Respectful

- Use welcoming language
- Respect different viewpoints
- Accept constructive feedback
- Focus on what's best for community

### Be Professional

- Keep discussions technical
- Avoid personal attacks
- No spam or self-promotion
- Follow GitHub guidelines

### Be Helpful

- Provide constructive feedback
- Help newcomers
- Share knowledge
- Acknowledge contributions

## 📚 Resources

### Writing
- [Markdown Guide](https://www.markdownguide.org/)
- [Technical Writing Guide](https://developers.google.com/tech-writing)

### Development
- [Eleventy Docs](https://www.11ty.dev/docs/)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/)

### Tools
- [Grammarly](https://www.grammarly.com/) - Grammar checking
- [Hemingway](http://www.hemingwayapp.com/) - Readability
- [Carbon](https://carbon.now.sh/) - Code screenshots

## 🎖️ Recognition

Contributors will be:
- Listed as article authors
- Mentioned in release notes
- Acknowledged in commit history
- Featured in README (for significant contributions)

## 📧 Questions?

- **General questions**: Open a Discussion
- **Bug reports**: Open an Issue  
- **Feature requests**: Open an Issue
- **Other**: Email us or comment on relevant issue

## 📄 License

By contributing, you agree your contributions will be licensed under the same license as this project (MIT License).

---

**Thank you for contributing!** 🙏

Your knowledge helps developers worldwide build better software.
