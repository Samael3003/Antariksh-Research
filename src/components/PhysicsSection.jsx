// PhysicsSection.jsx
import React from 'react';
import SectionTitle from './SectionTitle';
import PhysicsCard from './PhysicsCard';

const physicsData = [
  {
    title: 'From Face-On to Edge-On: The Spiral Story of a Stunning Galaxy',
    image: 'https://scitechdaily.com/images/Spiral-Galaxy-IC-5332-777x762.jpg?ezimgfmt=ng:webp/ngcb2',
    keywords: ['Stunning Galaxy'],
    link: 'https://scitechdaily.com/from-face-on-to-edge-on-the-spiral-story-of-a-stunning-galaxy/',
  },
  {
    title: 'Dark Matter and Galactic Collisions: Harvard Astronomers Explain the Milky Way’s Mysterious Warp',
    image: 'https://scitechdaily.com/images/Milky-Way-Galaxy-Warp-2048x1152.jpg?ezimgfmt=rs%3Adevice%2Frscb2-1',
    keywords: ['Dark Matter', 'Gallactic Collisions'],
    link: 'https://scitechdaily.com/dark-matter-and-galactic-collisions-harvard-astronomers-explain-the-milky-ways-mysterious-warp/',
  },
  {
    title: 'When Space Sizzles: Scientists Discover the Hottest Jupiter-Like Object Ever',
    image: 'https://scitechdaily.com/images/Hot-Jupiter-Exoplanet-Art-Illustration-777x518.jpg?ezimgfmt=ng:webp/ngcb2',
    keywords: ['Jupiter', 'Cosmic Discovery'],
    link: 'https://scitechdaily.com/when-space-sizzles-scientists-discover-the-hottest-jupiter-like-object-ever/',
  },
  {
    title: 'From Face-On to Edge-On: The Spiral Story of a Stunning Galaxy',
    image: 'https://scitechdaily.com/images/Spiral-Galaxy-IC-5332-777x762.jpg?ezimgfmt=ng:webp/ngcb2',
    keywords: ['Stunning Galaxy'],
    link: 'https://scitechdaily.com/from-face-on-to-edge-on-the-spiral-story-of-a-stunning-galaxy/',
  },
  {
    title: 'Dark Matter and Galactic Collisions: Harvard Astronomers Explain the Milky Way’s Mysterious Warp',
    image: 'https://scitechdaily.com/images/Milky-Way-Galaxy-Warp-2048x1152.jpg?ezimgfmt=rs%3Adevice%2Frscb2-1',
    keywords: ['Dark Matter', 'Gallactic Collisions'],
    link: 'https://scitechdaily.com/dark-matter-and-galactic-collisions-harvard-astronomers-explain-the-milky-ways-mysterious-warp/',
  },
  {
    title: 'When Space Sizzles: Scientists Discover the Hottest Jupiter-Like Object Ever',
    image: 'https://scitechdaily.com/images/Hot-Jupiter-Exoplanet-Art-Illustration-777x518.jpg?ezimgfmt=ng:webp/ngcb2',
    keywords: ['Jupiter', 'Cosmic Discovery'],
    link: 'https://scitechdaily.com/when-space-sizzles-scientists-discover-the-hottest-jupiter-like-object-ever/',
  },
  // Add more data for additional cards if needed
];

function PhysicsSection() {
  const columns = 3; // Number of columns

  // Calculate the number of cards in each column
  const cardsPerColumn = Math.ceil(physicsData.length / columns);

  // Create an array of columns, each containing cards
  const columnData = Array.from({ length: columns }, (_, columnIndex) =>
    physicsData.slice(columnIndex * cardsPerColumn, (columnIndex + 1) * cardsPerColumn)
  );

  return (
    <div>
      <SectionTitle>PHYSICS</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {columnData.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((data, index) => (
              <PhysicsCard
                key={index}
                title={data.title}
                image={data.image}
                keywords={data.keywords}
                link={data.link}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhysicsSection;
