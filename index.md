---
layout: default
title: Home
---

# DevOps Playbooks

Welcome to our collection of technical playbooks and guides. These resources are designed to help development teams implement best practices, automate workflows, and maintain high-quality codebases.

## 📚 Latest Articles

<div class="articles-grid">
{% for article in site.articles reversed limit:6 %}
  <article class="article-card">
    <h3><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h3>
    <p class="article-meta">
      <span class="date">{{ article.date | date: "%B %d, %Y" }}</span>
      {% if article.category %}
      <span class="category">{{ article.category }}</span>
      {% endif %}
    </p>
    <p class="article-excerpt">{{ article.description }}</p>
    <a href="{{ article.url | relative_url }}" class="read-more">Read More →</a>
  </article>
{% endfor %}
</div>

## 🗂️ Categories

- **Code Quality** - SonarQube, linting, code reviews
- **CI/CD** - GitHub Actions, deployment automation
- **DevOps** - Infrastructure, monitoring, observability
- **AI Tools** - Claude Code, MCP, automation

## 🚀 Getting Started

Browse our [articles](/articles/) to find guides relevant to your needs. Each playbook includes:

- Step-by-step instructions
- Code examples and configurations
- Best practices and troubleshooting
- Resources and further reading

---

<div class="cta-section">
  <a href="/articles/" class="btn-primary">Browse All Articles</a>
</div>
