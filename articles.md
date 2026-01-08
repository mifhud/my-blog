---
layout: default
title: Articles
permalink: /articles/
---

# All Articles

Browse our complete collection of technical playbooks and guides.

## Filter by Category

<div class="category-filter">
  <button class="filter-btn active" data-category="all">All</button>
  <button class="filter-btn" data-category="Code Quality">Code Quality</button>
  <button class="filter-btn" data-category="CI/CD">CI/CD</button>
  <button class="filter-btn" data-category="DevOps">DevOps</button>
  <button class="filter-btn" data-category="AI Tools">AI Tools</button>
</div>

<div class="articles-list">
  {% assign sorted_articles = site.articles | sort: 'date' | reverse %}
  {% for article in sorted_articles %}
  <article class="article-item" data-category="{{ article.category }}">
    <div class="article-item-content">
      <h2><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h2>
      
      <div class="article-meta">
        <time datetime="{{ article.date | date_to_xmlschema }}">
          {{ article.date | date: "%B %d, %Y" }}
        </time>
        
        {% if article.category %}
        <span class="category">{{ article.category }}</span>
        {% endif %}
        
        {% if article.tags %}
        <div class="tags">
          {% for tag in article.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      
      {% if article.description %}
      <p class="article-description">{{ article.description }}</p>
      {% endif %}
      
      <a href="{{ article.url | relative_url }}" class="read-more">Read Article →</a>
    </div>
  </article>
  {% endfor %}
</div>

<style>
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.filter-btn:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-item {
  padding: 1.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.article-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.article-item h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.article-item h2 a {
  color: var(--text-color);
  text-decoration: none;
}

.article-item h2 a:hover {
  color: var(--primary-color);
}

.article-item.hidden {
  display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('.article-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter articles
      articles.forEach(article => {
        if (category === 'all' || article.dataset.category === category) {
          article.classList.remove('hidden');
        } else {
          article.classList.add('hidden');
        }
      });
    });
  });
});
</script>
