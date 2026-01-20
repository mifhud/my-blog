---
date: 2026-01-21
topic: "Remove Category Filter from Blog - Implementation Plan"
design: thoughts/shared/designs/2026-01-21-remove-category-filter-design.md
status: ready
---

# Implementation Plan: Remove Category Filter from Blog

## Overview

Remove the category filtering feature from `src/articles.md` by deleting filter UI, JavaScript logic, and associated CSS. This is a single-file modification with no dependencies.

## File Changes

### File: `src/articles.md`

**Current structure:**
- Lines 1-10: Frontmatter and header
- Lines 11-18: Filter UI (DELETE)
- Lines 20-44: Article list (MODIFY - remove data attribute)
- Lines 46-114: Styles (MODIFY - remove filter styles)
- Lines 116-140: JavaScript (DELETE)

#### Change 1: Remove Filter Section (Lines 11-18)

**DELETE these lines:**
```markdown
## Filter by Category

<div class="category-filter">
  <button class="filter-btn active" data-category="all">All</button>
  {% for cat in metadata.categories %}
  <button class="filter-btn" data-category="{{ cat }}">{{ cat }}</button>
  {% endfor %}
</div>
```

**Result:** Lines 11-18 removed completely

---

#### Change 2: Remove data-category Attribute (Line 22)

**BEFORE (line 22):**
```html
  <article class="article-item" data-category="{{ article.data.category }}">
```

**AFTER:**
```html
  <article class="article-item">
```

---

#### Change 3: Remove Filter-Related CSS (Lines 46-114)

**DELETE these style blocks:**

```css
/* Lines 47-52 - DELETE */
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
}

/* Lines 54-63 - DELETE */
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

/* Lines 65-69 - DELETE */
.filter-btn:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Lines 71-75 - DELETE */
.filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Lines 111-113 - DELETE */
.article-item.hidden {
  display: none;
}
```

**KEEP these styles (lines 77-110):**
- `.articles-list`
- `.article-item`
- `.article-item:hover`
- `.article-item h2`
- `.article-item h2 a`
- `.article-item h2 a:hover`

---

#### Change 4: Remove JavaScript Filtering Logic (Lines 116-140)

**DELETE entire script block:**
```html
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
```

---

## Implementation Steps

### Step 1: Read Current File
```bash
# Verify current content
cat src/articles.md
```

### Step 2: Create Backup
```bash
# Safety copy
cp src/articles.md src/articles.md.backup
```

### Step 3: Edit File
Use the Edit tool to make the four changes above in sequence:
1. Remove lines 11-18 (filter UI)
2. Remove `data-category` attribute from line 22
3. Remove filter CSS blocks
4. Remove JavaScript block

### Step 4: Verify Changes
```bash
# Check the modified file
cat src/articles.md
```

### Step 5: Test Build
```bash
# Clean build
npm run clean
npm run build

# Expected: Build succeeds with no errors
```

### Step 6: Test Development Server
```bash
# Start dev server
npm start

# Manual testing:
# 1. Visit http://localhost:8080/my-blog/articles/
# 2. Verify all articles visible
# 3. Verify no filter buttons
# 4. Check browser console (no errors)
# 5. Test responsive layout
```

### Step 7: Commit Changes
```bash
# Stage changes
git add src/articles.md

# Commit with clear message
git commit -m "feat: remove category filter from blog listing page

- Remove filter UI and buttons
- Remove data-category attributes
- Remove filter-related CSS
- Remove JavaScript filtering logic
- Simplify articles page to show all articles chronologically

Closes: #[issue-number]"

# Push to remote
git push origin feat/v1.0.0
```

---

## Testing Checklist

### Build Tests
- [ ] `npm run clean` - succeeds
- [ ] `npm run build` - succeeds with no errors
- [ ] `_site/articles/index.html` exists
- [ ] No filter markup in built HTML

### Functional Tests
- [ ] Dev server starts (`npm start`)
- [ ] `/articles/` page loads
- [ ] All articles are visible
- [ ] No filter buttons displayed
- [ ] Article cards render correctly
- [ ] Category badges still display in article metadata
- [ ] "Read Article" links work
- [ ] Article hover effects work

### Visual Tests
- [ ] Article layout is clean and centered
- [ ] Spacing between articles looks correct
- [ ] Category badges on individual articles unchanged
- [ ] Responsive layout works on mobile

### Browser Tests
- [ ] No JavaScript errors in console
- [ ] No CSS warnings
- [ ] Page loads quickly (no filter JS)

### Individual Article Pages
- [ ] Category badges still show on article pages
- [ ] Article layout unchanged
- [ ] Navigation (prev/next) still works

---

## Success Criteria

- [ ] Filter UI completely removed from `/articles/`
- [ ] All articles visible without filtering
- [ ] Build succeeds without errors
- [ ] No console errors in browser
- [ ] Category badges still display on individual article pages
- [ ] Clean git commit pushed to remote
- [ ] Deployment succeeds (GitHub Actions)

---

## Rollback Plan

If issues arise:
```bash
# Restore backup
cp src/articles.md.backup src/articles.md

# Or git revert
git revert HEAD

# Rebuild
npm run build
```

---

## Expected Outcome

**Before:**
- Articles page has filter buttons
- JavaScript handles click events
- Articles toggle visibility based on category

**After:**
- Clean, simple article list
- All articles always visible
- No JavaScript filtering
- Faster page load
- Cleaner user experience

---

## Notes

- This is a pure deletion task - no new code added
- Single file modified: `src/articles.md`
- No dependencies on other files
- No Eleventy config changes needed
- Category frontmatter in articles can remain (harmless metadata)
