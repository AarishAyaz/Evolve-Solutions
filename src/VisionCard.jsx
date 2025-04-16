import React from 'react';

const VisionCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
     
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-300"></div>
      
      <div className="flex items-start">
      
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mr-4 transform transition-transform duration-300 group-hover:rotate-6">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
  
      <div className="w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-600/0 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default VisionCard;