# 🎉 DevOps Playbooks - Node.js Edition

## ✅ What You Got

Struktur lengkap GitHub Pages dengan **Node.js + Eleventy (11ty)**:

```
github-pages-node/
├── src/
│   ├── articles/              # ✍️ Artikel Anda (1 + template)
│   ├── _layouts/              # 📄 Page layouts  
│   ├── _includes/             # 🧩 Components
│   ├── _data/                 # ⚙️ Configuration
│   └── assets/                # 🎨 CSS, JS, Images
├── .eleventy.js               # ⚙️ Eleventy config
├── package.json               # 📦 Dependencies
└── .github/workflows/         # 🚀 Auto-deployment
```

### 🌟 Keunggulan Node.js Version

| Feature | Node.js (Eleventy) | Ruby (Jekyll) |
|---------|-------------------|---------------|
| Setup | ✅ `npm install` | ❌ Ruby + Bundle setup |
| Build Speed | ⚡ Super Fast | 🐢 Slower |
| Ecosystem | 🎯 npm (familiar) | 💎 Ruby gems |
| Learning | 😊 Easy | 🤔 Moderate |
| Hot Reload | ✅ Built-in | ⚠️ Requires config |
| File Watch | ⚡ Lightning fast | 🔄 Slower |

## 🚀 Setup Lokal (3 Menit)

### Step 1: Install Dependencies

```bash
# Navigate ke folder
cd github-pages-node

# Install packages (pertama kali saja)
npm install

# Selesai! ✅
```

### Step 2: Start Development Server

```bash
# Start server
npm start

# Server berjalan di:
# → http://localhost:8080
```

**Features:**
- ✅ Hot reload (auto-refresh saat file berubah)
- ✅ Fast build (<1 detik)
- ✅ Live preview
- ✅ No cache issues

## ✍️ Membuat Artikel Baru

### Quick Method (30 detik)

```bash
# Copy template
cp src/articles/TEMPLATE.md src/articles/2025-01-08-artikel-baru.md

# Edit file (update frontmatter + content)
code src/articles/2025-01-08-artikel-baru.md

# Save → Langsung muncul di browser! 🎉
```

### Frontmatter Format

```yaml
---
layout: article.njk
title: "Judul Artikel Anda"
date: 2025-01-08
category: Code Quality  # atau CI/CD, DevOps, AI Tools, dll
tags:
  - articles         # WAJIB ada
  - tag1
  - tag2
author: Nama Anda
description: "Deskripsi singkat untuk SEO (150-160 karakter)"
---

## Content Anda

Tulis artikel di sini...
```

## 🎨 Kustomisasi Site

### Update Info Website

Edit `src/_data/metadata.json`:

```json
{
  "title": "Judul Website Anda",
  "description": "Deskripsi website",
  "url": "https://username.github.io/repo-name",
  "author": {
    "name": "Nama Anda",
    "email": "email@example.com",
    "github": "username"
  }
}
```

### Ubah Warna Theme

Edit `src/assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb;    /* Warna utama */
  --secondary-color: #1e40af;  /* Warna sekunder */
  --text-color: #1f2937;       /* Warna teks */
}
```

### Tambah Menu Navigasi

Edit `src/_data/metadata.json`:

```json
{
  "navigation": [
    { "title": "Home", "url": "/" },
    { "title": "Articles", "url": "/articles/" },
    { "title": "Menu Baru", "url": "/menu-baru/" }
  ]
}
```

Buat halaman baru `src/menu-baru.md`:

```markdown
---
layout: base.njk
title: Menu Baru
---

# Konten Menu Baru
```

## 🌐 Deploy ke GitHub Pages

### Method 1: Quick Deploy (5 Menit)

```bash
# 1. Initialize git (jika belum)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: DevOps Playbooks"

# 4. Create GitHub repo (di website GitHub)
# → Buat repo baru: devops-playbooks

# 5. Add remote dan push
git remote add origin https://github.com/username/devops-playbooks.git
git push -u origin main
```

### Method 2: Detailed Steps

#### A. Create GitHub Repository

1. Go to **github.com/new**
2. Repository name: `devops-playbooks`
3. Description: "Technical playbooks and guides"
4. Public or Private (your choice)
5. **DON'T** initialize with README
6. Click **Create repository**

#### B. Push Code

```bash
# If not initialized
git init
git add .
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/username/devops-playbooks.git

# Push
git push -u origin main
```

#### C. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Build and deployment":
   - Source: **GitHub Actions** ✅
   - (Workflow will auto-detect and deploy)
4. Save (jika ada tombol Save)

**Done!** 🎉

Website akan live di:
```
https://username.github.io/devops-playbooks
```

**First deployment:** 2-3 menit
**Updates:** 1-2 menit

Check progress di tab **Actions**.

## 📝 Workflow Menulis Artikel

### 1. Buat Artikel Baru

```bash
# Copy template dengan nama sesuai format
cp src/articles/TEMPLATE.md src/articles/$(date +%Y-%m-%d)-judul-artikel.md
```

### 2. Edit Artikel

```bash
# Buka dengan editor favorit
code src/articles/2025-01-08-judul-artikel.md

# Atau
nano src/articles/2025-01-08-judul-artikel.md
```

**Update:**
- Frontmatter (title, date, category, tags)
- Content (tulis artikel Anda)
- Save file

### 3. Preview Lokal

- Server sudah jalan? → Refresh browser
- Server belum jalan? → `npm start`
- View di: http://localhost:8080

### 4. Deploy ke Production

```bash
# Stage changes
git add .

# Commit dengan message jelas
git commit -m "Add article: Judul Artikel"

# Push (auto-deploy!)
git push
```

**Wait 2-3 minutes** → Artikel live! 🚀

## 🛠️ Available Commands

```bash
# Development
npm start              # Start dev server (port 8080)
npm run build         # Build production site
npm run clean         # Clean _site directory

# Deploy
git push              # Push to GitHub → auto-deploy!
```

## 📊 Artikel Categories

Pilih salah satu:

1. **Code Quality** - SonarQube, linting, testing, code review
2. **CI/CD** - GitHub Actions, Jenkins, deployment automation
3. **DevOps** - Docker, Kubernetes, infrastructure, monitoring
4. **AI Tools** - Claude Code, MCP, AI-assisted development
5. **Security** - Best practices, vulnerability management, hardening
6. **Performance** - Optimization, scaling, profiling, caching

## 🎯 File & Folder Penting

```
src/
├── articles/                    # ✍️ ARTIKEL DI SINI
│   ├── TEMPLATE.md              # Template untuk artikel baru
│   └── 2025-01-08-*.md          # Artikel Anda
│
├── _data/
│   └── metadata.json            # ⚙️ KONFIGURASI WEBSITE
│
├── _layouts/                    # Template halaman
│   ├── base.njk                 # Base layout
│   └── article.njk              # Article layout
│
├── _includes/                   # Components
│   ├── header.njk               # Header
│   └── footer.njk               # Footer
│
└── assets/
    ├── css/style.css            # 🎨 STYLING
    └── js/main.js               # JavaScript
```

## 🐛 Troubleshooting

### Port sudah dipakai?

```bash
# Gunakan port lain
npx @11ty/eleventy --serve --port=8081
```

### Perubahan tidak muncul?

```bash
# Hard refresh browser
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)

# Atau restart server
# Ctrl+C (stop)
npm start (restart)
```

### Build error?

```bash
# Clean & rebuild
npm run clean
rm -rf node_modules
npm install
npm start
```

### GitHub Pages tidak update?

1. Check tab **Actions** untuk errors
2. Wait 5 menit
3. Clear browser cache
4. Verify Actions workflow enabled

## 📚 Dokumentasi Lengkap

1. **QUICKSTART.md** - Setup super cepat (< 5 menit)
2. **README.md** - Dokumentasi lengkap
3. **CONTRIBUTING.md** - Panduan kontribusi
4. **src/articles/TEMPLATE.md** - Template artikel

## ✨ Features Website

### ✅ Sudah Ada

- Responsive design (mobile-friendly)
- Dark mode support
- Syntax highlighting untuk code
- Copy button di code blocks
- SEO optimized (meta tags, sitemap)
- RSS feed auto-generated
- Fast build times (<1 detik)
- Hot reload development
- Category filtering
- Tag system
- Article navigation (prev/next)

### 🚀 Ready to Use

- Article system
- Homepage dengan latest articles
- Articles listing page
- About page
- 404 page
- Auto-deployment workflow

## 🎓 Learning Resources

### Eleventy (11ty)
- [Official Docs](https://www.11ty.dev/docs/)
- [Quick Tips](https://www.11ty.dev/docs/quicktips/)
- [Tutorials](https://www.11ty.dev/docs/tutorials/)

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Nunjucks (Template)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/)

## 💡 Pro Tips

### Development

```bash
# Terminal splits:
# Terminal 1: npm start (dev server)
# Terminal 2: git commands, file operations
```

### Article Writing

1. ✅ Gunakan TEMPLATE.md
2. ✅ Isi frontmatter dengan lengkap
3. ✅ Tulis konten per section
4. ✅ Test code examples
5. ✅ Preview lokal sebelum push

### Git Workflow

```bash
# Feature branch untuk artikel baru
git checkout -b article/nama-artikel

# Make changes...

# Commit & push
git add .
git commit -m "Add article: Nama Artikel"
git push origin article/nama-artikel

# Create PR di GitHub
```

## 🎉 Ready to Go!

Website Anda **100% siap** untuk digunakan!

**Quick Checklist:**
- ✅ Extract folder `github-pages-node`
- ✅ `cd github-pages-node`
- ✅ `npm install`
- ✅ `npm start`
- ✅ Edit `src/_data/metadata.json`
- ✅ Buat artikel pertama
- ✅ Push ke GitHub
- ✅ Enable GitHub Pages
- ✅ Share knowledge! 📝

## 📧 Need Help?

- **Documentation**: Check README.md
- **Questions**: Open GitHub Discussion
- **Bugs**: Open GitHub Issue
- **Examples**: See existing articles

---

## 🚀 Next Commands

```bash
# Start development
npm start

# Create article  
cp src/articles/TEMPLATE.md src/articles/$(date +%Y-%m-%d)-title.md

# Deploy
git add . && git commit -m "Update" && git push
```

**Happy writing!** ✍️🎉

---

*Built with Node.js, Eleventy (11ty), and ❤️*
