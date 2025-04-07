import React from 'react';

const VisionCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 mb-6 border border-gray-700 shadow-md transition-all duration-300 ease-in-out hover:transform hover:translate-x-1 hover:shadow-lg hover:shadow-blue-400/20 hover:border-blue-400">
      <div>
        <h5 className="text-2xl text-blue-400 mb-4">{title}</h5>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default VisionCard;