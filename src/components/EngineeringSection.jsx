// EngineeringSection.jsx
import React from 'react';
import SectionTitle from './SectionTitle';
import EngineeringCard from './EngineeringCard';

const engineeringData = [
  {
    title: 'IIT Indore to launch BTech in Space Science and Engineering',
    image: 'https://www.hindustantimes.com/ht-img/img/2023/03/14/550x309/iit-indore_855afaea-2bb3-11eb-a688-0f1acfc82532_1678785031643_1678785031643.jpg',
    keywords: ['Department of Astronomy, Astrophysics and Space Engineering', 'Indian Institute of Technology Indore'],
    link: 'https://www.hindustantimes.com/education/admissions/iit-indore-to-launch-btech-in-space-science-and-engineering-101678784391908.html',
  },
  {
    title: 'Class of 2023: Astrophysics, Computer Engineering Student Alicia Mand Aims for the Stars ',
    image: 'https://www.odu.edu/sites/default/files/styles/featured_content_image/public/images/ali-mand-20.jpg?h=10d202d3',
    keywords: ['Astrophysics', 'Computer Engineering'],
    link: 'https://www.odu.edu/article/class-of-2023-astrophysics-computer-engineering-student-alicia-mand-aims-for-the-stars',
  },
  {
    title: 'BTech in Space Science and Engineering – New Program Launched by IIT Indore',
    image: 'https://th-i.thgim.com/public/incoming/9qr1yd/article66641609.ece/alternates/LANDSCAPE_1200/iit%20indore.png',
    keywords: ['Space Science and Engineering', 'Indian Institute of Technology Indore'],
    link: 'https://www.thehindu.com/brandhub/btech-in-space-science-and-engineering-new-program-launched-by-iit-indore/article66641614.ece',
  },
  {
    title: 'IIT Indore to launch BTech in Space Science and Engineering',
    image: 'https://www.hindustantimes.com/ht-img/img/2023/03/14/550x309/iit-indore_855afaea-2bb3-11eb-a688-0f1acfc82532_1678785031643_1678785031643.jpg',
    keywords: ['Department of Astronomy, Astrophysics and Space Engineering', 'Indian Institute of Technology Indore'],
    link: 'https://www.hindustantimes.com/education/admissions/iit-indore-to-launch-btech-in-space-science-and-engineering-101678784391908.html',
  },
  {
    title: 'Class of 2023: Astrophysics, Computer Engineering Student Alicia Mand Aims for the Stars ',
    image: 'https://www.odu.edu/sites/default/files/styles/featured_content_image/public/images/ali-mand-20.jpg?h=10d202d3',
    keywords: ['Astrophysics', 'Computer Engineering'],
    link: 'https://www.odu.edu/article/class-of-2023-astrophysics-computer-engineering-student-alicia-mand-aims-for-the-stars',
  },
  {
    title: 'BTech in Space Science and Engineering – New Program Launched by IIT Indore',
    image: 'https://th-i.thgim.com/public/incoming/9qr1yd/article66641609.ece/alternates/LANDSCAPE_1200/iit%20indore.png',
    keywords: ['Space Science and Engineering', 'Indian Institute of Technology Indore'],
    link: 'https://www.thehindu.com/brandhub/btech-in-space-science-and-engineering-new-program-launched-by-iit-indore/article66641614.ece',
  },
  // Add more data for additional cards if needed
];

function EngineeringSection() {
  const rows = 3; // Number of columns

  // Calculate the number of cards in each column
  const cardsPerColumn = Math.ceil(engineeringData.length / rows);

  // Create an array of columns, each containing cards
  const columnData = Array.from({ length: rows }, (_, columnIndex) =>
    engineeringData.slice(columnIndex * cardsPerColumn, (columnIndex + 1) * cardsPerColumn)
  );

  return (
    <div>
      <SectionTitle>ENGINEERING</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {columnData.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((data, index) => (
              <EngineeringCard
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

export default EngineeringSection;
