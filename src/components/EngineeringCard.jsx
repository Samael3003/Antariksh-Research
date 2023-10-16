// EngineeringCard.jsx
import React from 'react';

function EngineeringCard({ title, image, keywords, link }) {
  return (
    <a
      href={link}
      className="group block w-full bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md overflow-hidden mb-4"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">
          {title}
        </h1>
        <div className="mb-2 flex flex-wrap">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded-full text-xs mr-2 mb-2"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default EngineeringCard;
