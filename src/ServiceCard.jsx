import React from 'react';

const ServiceCard = ({ title, description, icon, gradient, delay = 0 }) => {
  return (
    <div 
      className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group relative overflow-hidden"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >

      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
    
      <div className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${gradient} p-3 mb-6 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>
      

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>
      

      <div className="flex items-center text-blue-400 font-medium transition-all duration-300 group-hover:translate-x-2">
        <span>Learn more</span>
        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;