import React from 'react';
import Masonry from './Masonry';

// Import all images from src/assets/images using Vite's glob (eager so we get URLs)
const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });
const images = Object.values(modules)
  .map(m => (m && m.default) || m)
  .filter(Boolean);

const sampleItems = images.map((src, i) => ({
  id: `local-${i + 1}`,
  img: src,
  height: 600 + Math.floor(Math.random() * 400),
  url: src
}));

const MasonryContainer = () => {
  // If no images found, fall back to a few placeholders so UI still renders
  const items = sampleItems.length ? sampleItems : Array.from({ length: 6 }).map((_, i) => ({
    id: `fallback-${i + 1}`,
    img: `https://picsum.photos/seed/fallback-${i + 1}/800/1200`,
    height: 500 + Math.floor(Math.random() * 300),
    url: 'https://picsum.photos'
  }));

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: '2rem auto', minHeight: 400 }}>
      <Masonry
        items={items}
        animateFrom="bottom"
        scaleOnHover={true}
        colorShiftOnHover={true}
        blurToFocus={true}
      />
    </div>
  );
};

export default MasonryContainer;
