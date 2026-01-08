# Contributing Guidelines

Thank you for considering contributing to DevOps Playbooks! This document provides guidelines for contributing articles and improvements to the site.

## How to Contribute

### 1. Adding New Articles

#### Quick Method

1. **Use the Template**
   ```bash
   cp _articles/TEMPLATE.md _articles/YYYY-MM-DD-your-article-title.md
   ```

2. **Fill in the Frontmatter**
   - Add appropriate title, date, category, and tags
   - Write a compelling description
   - Specify your name as author

3. **Write Your Content**
   - Follow the template structure
   - Include practical examples
   - Add code snippets with proper syntax highlighting
   - Use clear, concise language

4. **Test Locally**
   ```bash
   bundle exec jekyll serve
   ```
   View at `http://localhost:4000`

5. **Submit Pull Request**
   - Create a feature branch
   - Commit your article
   - Push to your fork
   - Open a PR with description

#### Detailed Method

See [README.md](README.md) for comprehensive article creation instructions.

### 2. Improving Existing Articles

Found an error or want to improve an article?

1. **Fork the Repository**
2. **Make Your Changes**
   - Fix typos or errors
   - Update outdated information
   - Add missing examples
   - Improve clarity
3. **Test Your Changes Locally**
4. **Submit Pull Request**

### 3. Suggesting New Topics

Have an idea for a new article?

1. **Check Existing Issues** to avoid duplicates
2. **Open New Issue** with:
   - Proposed title
   - Brief outline
   - Target audience
   - Value proposition
3. **Wait for Feedback** before writing

## Article Guidelines

### Content Standards

#### Required Elements

- ✅ Clear, descriptive title
- ✅ Publication date
- ✅ Appropriate category
- ✅ Relevant tags (3-5 recommended)
- ✅ Meta description (150-160 characters)
- ✅ Introduction with "What You'll Learn"
- ✅ Prerequisites section
- ✅ Step-by-step instructions
- ✅ Code examples (tested and working)
- ✅ Best practices section
- ✅ Troubleshooting guide
- ✅ Resources/links section
- ✅ Conclusion with key takeaways

#### Quality Standards

**Writing Style:**
- Clear and concise
- Professional but approachable
- Active voice preferred
- Short paragraphs (3-4 sentences)
- Bullet points for lists
- Avoid jargon without explanation

**Code Examples:**
- Must be tested and working
- Include language specification
- Add comments for complex code
- Show expected output when relevant
- Use syntax highlighting

**Structure:**
- Logical flow from setup to implementation
- Progressive complexity
- Clear section headings
- Table of contents for long articles

### Technical Standards

#### File Naming

```
_articles/YYYY-MM-DD-article-slug.md
```

**Examples:**
- `_articles/2025-01-08-docker-best-practices.md`
- `_articles/2025-01-15-github-actions-ci-cd.md`

#### Frontmatter Format

```yaml
---
layout: article
title: "Article Title (50-60 chars)"
date: YYYY-MM-DD
category: Category Name
tags: [tag1, tag2, tag3, tag4]
author: Your Name
description: "SEO-friendly description (150-160 chars)"
---
```

#### Category Options

Choose **one** category:
- Code Quality
- CI/CD
- DevOps
- AI Tools
- Security
- Performance

#### Tag Guidelines

- Use 3-5 relevant tags
- Use existing tags when possible
- Lowercase, hyphenated format
- Technology names as written (e.g., `SonarQube`, `GitHub Actions`)

#### Markdown Best Practices

**Headers:**
```markdown
## Main Section (H2)
### Subsection (H3)
#### Detail Section (H4)
```

**Code Blocks:**
````markdown
```language
code here
```
````

**Supported Languages:**
- `bash`, `sh`, `shell`
- `javascript`, `js`
- `python`, `py`
- `yaml`, `yml`
- `json`
- `markdown`, `md`
- `dockerfile`
- Many more...

**Links:**
```markdown
[Link Text](https://example.com)
```

**Images:**
```markdown
![Alt Text](/assets/images/image-name.png)
```

Store images in `assets/images/`

**Tables:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

### SEO Guidelines

1. **Title:**
   - 50-60 characters
   - Include main keyword
   - Descriptive and specific

2. **Description:**
   - 150-160 characters
   - Include primary keywords
   - Compelling call-to-value
   - Complete sentence

3. **Content:**
   - Use headings hierarchically
   - Include internal links
   - Add alt text to images
   - Use relevant keywords naturally

4. **Tags:**
   - Relevant to content
   - Mix broad and specific
   - Help with discoverability

## Code of Conduct

### Be Respectful

- Use welcoming and inclusive language
- Respect differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Be Professional

- Keep discussions technical and relevant
- Avoid personal attacks or trolling
- No spam or self-promotion
- Follow GitHub's community guidelines

### Be Helpful

- Provide constructive feedback
- Help newcomers
- Share knowledge generously
- Acknowledge others' contributions

## Review Process

### Pull Request Review

When you submit a PR, maintainers will review:

1. **Content Quality**
   - Accuracy of information
   - Clarity of writing
   - Completeness of examples

2. **Technical Correctness**
   - Working code examples
   - Proper configuration
   - Best practices adherence

3. **Style Compliance**
   - Follows template structure
   - Proper formatting
   - Consistent with site style

4. **SEO Optimization**
   - Proper metadata
   - Good descriptions
   - Appropriate tags

### Feedback Timeline

- Initial review: 2-3 business days
- Follow-up reviews: 1-2 business days
- We'll provide constructive feedback
- Feel free to ask questions

## Getting Help

### Questions?

- **Content Questions:** Open a GitHub issue
- **Technical Issues:** Check README.md or open issue
- **Style Questions:** Review this guide or ask in issue

### Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## Recognition

Contributors will be:
- Listed as article authors
- Acknowledged in commit history
- Mentioned in release notes (for significant contributions)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

**Thank you for contributing to DevOps Playbooks!** 🎉

Your knowledge and expertise help developers worldwide improve their practices and build better software.
