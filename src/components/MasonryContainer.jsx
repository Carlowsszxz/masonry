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
  // Select 10 random images from the available images
  const getRandomImages = (items, count = 10) => {
    if (items.length <= count) return items;
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // If no images found, fall back to a few placeholders so UI still renders
  const items = sampleItems.length ? getRandomImages(sampleItems, 10) : Array.from({ length: 10 }).map((_, i) => ({
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
