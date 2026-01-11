---
layout: base.njk
title: "DevOps Playbooks"
description: "Technical playbooks and guides for modern development practices"
---

# Welcome to DevOps Playbooks

Technical playbooks and guides for modern development practices

## Latest Articles

{% for article in collections.articles %}
  {% if loop.index <= 5 %}
- **[{{ article.data.title }}]({{ article.url }})** - {{ article.data.description }}
  *Published: {{ article.date | dateReadable }}*
  {% endif %}
{% endfor %}

## Featured Categories

- **Code Quality** - Tools and practices for maintaining high code standards
- **CI/CD** - Continuous integration and deployment strategies  
- **DevOps** - Infrastructure, automation, and operational excellence
- **Security** - Best practices for secure development

[View All Articles →]({{ '/articles/' | url }})

## About This Site

This site contains technical playbooks, guides, and best practices for modern software development. Each article is designed to be actionable and practical.

[Learn More →]({{ '/about/' | url }})
