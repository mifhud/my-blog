# Images Directory

## Required Assets

### Avatar
- **Path:** `/assets/images/avatar.jpg`
- **Size:** 160x160px (recommended)
- **Format:** JPG or PNG
- **Purpose:** Profile avatar displayed in the header

### Project Images
- **Path:** `/assets/images/projects/`
- **Aspect Ratio:** 4:5 (e.g., 800x1000px)
- **Format:** JPG or WebP with fallback
- **Size:** Keep under 200KB
- **Purpose:** Featured project showcase images

## Adding Images

1. Place your avatar at `src/assets/images/avatar.jpg`
2. Add project images to `src/assets/images/projects/`
3. Update `src/_data/projects.json` with the correct image paths
4. Run `npm run build` to verify images are copied correctly
