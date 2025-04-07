import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="flex-1 min-w-[280px] max-w-[calc(50%-1rem)]">
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-md transition-all duration-300 ease-in-out h-full hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/20 hover:border-blue-400">
        <div className="p-8">
          <h5 className="text-2xl text-blue-400 mb-4">{title}</h5>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;