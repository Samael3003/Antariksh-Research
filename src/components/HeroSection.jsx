import React from 'react';
import LogoImage from '../images/logo.png'; // Import your logo image

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center py-20">
      <div className="flex items-center max-w-screen-xl mx-auto px-4">
        <div className="md:flex-1 text-center md:text-left md:pr-10">
          <h4 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
            Welcome to <b>ANTARIKSH</b>
          </h4>
          <p className="text-md md:text-xl max-w-xl mb-3 text-gray-600 dark:text-gray-300">
            Welcome to our immersive world of discovery! This page is a portal to the vast realms of physics and engineering. Explore cutting-edge research, cosmic wonders, and the latest breakthroughs in space science. Delve into the mysteries of dark matter, galactic collisions, and stunning galaxies. Learn about the hottest Jupiter-like objects and the future of space exploration. Our handpicked collection of articles and insights will take you on a journey through the captivating universe of physics and engineering. Join us in unraveling the secrets of the cosmos and the frontiers of technological innovation.
          </p>


        </div>

      </div>
    </div>
  );
}

export default HeroSection;
