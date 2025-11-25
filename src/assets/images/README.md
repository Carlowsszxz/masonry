Place images you want to use in the Masonry gallery into this folder.

Guidelines:
- Recommended formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
- Filenames: use simple names (no spaces) like `photo-01.jpg`.
- Recommended max width: 2000px to keep bundles small.

How to reference in components:
- Import in React: `import img1 from '../assets/images/photo-01.jpg';`
- Or use a relative URL: `/src/assets/images/photo-01.jpg` (Vite may require `new URL('./assets/images/photo-01.jpg', import.meta.url).href`)

Next steps (I can do these for you):
- Update `MasonryContainer.jsx` to automatically load images from this folder.
- Convert `MasonryContainer.jsx` to use these local images instead of the `picsum.photos` placeholders.
