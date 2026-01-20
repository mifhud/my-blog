---
date: 2026-01-21
topic: "Remove Category Filter from Blog"
status: validated
---

# Design: Remove Category Filter from Blog

## Problem Statement

Remove the interactive category filtering feature from the blog listing page (`/articles/`). The filter adds unnecessary complexity and the blog works perfectly well as a simple chronological list of all articles.

## Constraints

- Must preserve the clean article listing layout
- Should not break existing article frontmatter (categories can remain as metadata)
- Must maintain responsive design and visual consistency
- Keep the category badge display on individual article pages (it's just informational metadata there)
- No changes to Eleventy configuration or collections

## Approach

**Clean removal strategy** - Remove only the filtering mechanism, not the category concept entirely.

**Why this approach:**
- Articles can still categorize themselves for informational purposes
- We're just removing the interactive filtering UI
- Simpler is better - chronological list is easier to scan
- Less JavaScript = faster page load

**What we're removing:**
- Filter button UI
- JavaScript click handlers and filtering logic
- CSS for filter buttons
- Data attributes used for filtering

**What we're keeping:**
- Category badges as visual metadata (non-interactive)
- Category frontmatter in articles
- Category display on individual article pages

## Architecture

**Single file modification:** `src/articles.md`

The articles page currently has three sections:
1. **Header/Title** - Keep as-is
2. **Filter UI** (REMOVE) - Category buttons with click handlers  
3. **Article List** - Simplify by removing data attributes, keep optional category badges

## Components to Modify

### `src/articles.md`

**Removals:**
1. "Filter by Category" heading (line 11)
2. Filter button container (lines 13-18)
3. `data-category` attributes from article items (line 22)
4. Filter-related CSS (lines 46-75, 111-113)
5. JavaScript filtering logic (lines 116-140)

**Keep:**
- Article list structure
- Category badge display (lines 31-33) - now purely visual
- All article card styling
- Layout and responsive styles

### What We're NOT Touching

- `src/_layouts/article.njk` - Individual article category display unchanged
- `src/assets/css/style.css` - Global `.article-meta .category` badge styling unchanged
- Article frontmatter - Categories remain as metadata
- `.eleventy.js` - No config changes needed
- Collections - No changes to article collections

## Data Flow

### Before (Interactive Filtering)
```
User clicks filter button
  ↓
JavaScript reads button's data-category
  ↓
JavaScript checks each article's data-category attribute
  ↓
Toggles .hidden class on non-matching articles
  ↓
Only matching categories visible
```

### After (Simple List)
```
All articles always visible in chronological order
Category badge is pure visual element (no interaction)
No JavaScript filtering
No data attributes needed
```

## Implementation Steps

### Step 1: Remove Filter UI
**File:** `src/articles.md` (lines 11-18)

Delete:
- `## Filter by Category` heading
- Entire `.category-filter` div with buttons
- Nunjucks loop generating category buttons

### Step 2: Remove Data Attributes
**File:** `src/articles.md` (line 22)

Change:
```html
<article class="article-item" data-category="{{ article.data.category }}">
```

To:
```html
<article class="article-item">
```

### Step 3: Clean Up Styles
**File:** `src/articles.md` (lines 46-113)

Delete these style blocks:
- `.category-filter { ... }` (lines 47-52)
- `.filter-btn { ... }` (lines 54-63)
- `.filter-btn:hover { ... }` (lines 65-69)
- `.filter-btn.active { ... }` (lines 71-75)
- `.article-item.hidden { ... }` (lines 111-113)

Keep:
- `.articles-list` and all article card styles
- Layout and hover effects

### Step 4: Remove JavaScript
**File:** `src/articles.md` (lines 116-140)

Delete entire `<script>` block containing filter logic.

## Testing Strategy

### Build Verification
```bash
npm run clean
npm run build
```
Expected: Build succeeds with no errors

### Development Testing
```bash
npm start
```

**Manual checks:**
1. Visit `http://localhost:8080/my-blog/articles/`
2. Verify all articles are visible
3. Check no filter buttons appear
4. Verify article cards display correctly
5. Test responsive layout (resize browser)
6. Check browser console for errors (should be none)
7. Click through to individual article - category badge should still display

### Visual Regression
- Articles list should look clean without filter section
- Article cards maintain proper spacing and hover effects
- Category badges on individual article pages unchanged
- Mobile layout should stack articles properly

### Production Build Test
```bash
npm run build
# Verify _site/articles/index.html has no filter markup
# Verify no JavaScript errors in browser console
```

## Error Handling

**No error handling needed** - this is pure removal of UI elements.

**Validation:**
- Eleventy build must succeed
- Articles page must render all articles
- No console errors in browser
- Layout integrity maintained

## Rollback Plan

If issues arise:
1. Git revert the commit
2. The design is contained in a single file, making rollback trivial

## Success Criteria

- [ ] Filter buttons removed from `/articles/` page
- [ ] All articles visible without filtering
- [ ] No JavaScript errors in console
- [ ] Build succeeds (`npm run build`)
- [ ] Category badges still display on individual article pages
- [ ] Responsive layout works correctly
- [ ] Clean git commit with clear message

## Open Questions

None - scope is clear and boundaries well-defined.
