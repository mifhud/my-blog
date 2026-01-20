---
layout: base.njk
title: "About"
description: "Software engineer passionate about code quality, automation, and building practical solutions"
---

# Hi, I'm Miftahul Huda

I'm a software engineer with a passion for building quality software and sharing what I learn along the way. This is my space to document technical insights, experiments, and solutions to real-world problems.

## What I Write About

I focus on practical, actionable content around software development, code quality, and automation. Each article is based on hands-on experience and designed to help you solve real problems.

## Latest Articles

{% for article in collections.articles %}
  {% if loop.index <= 5 %}
- **[{{ article.data.title }}]({{ article.url | url }})** - {{ article.data.description }}
  *Published: {{ article.date | dateReadable }}*
  {% endif %}
{% endfor %}

[View All Articles →]({{ '/articles/' | url }})
