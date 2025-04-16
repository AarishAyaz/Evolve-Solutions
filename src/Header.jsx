import React from 'react';
import ESols from './assets/ESols.jpg';

const Header = ({ onContactClick , onServicesClick}) => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 w-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
      </div>
      
 
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 mb-8 flex justify-center items-center bg-gray-800 rounded-2xl p-2 shadow-xl shadow-blue-500/10 transform transition-all duration-500 hover:rotate-3 hover:scale-105">
          <img
            src={ESols}
            alt="Evolve Solutions"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 animate-[fadeInDown_1s_ease-out]">
          Evolve Solutions
        </h1>
        
        <p className="text-2xl font-light text-gray-300 mb-6 max-w-3xl animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:both] italic">
          "Your vision, our innovation – evolving to exceed expectations."
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 animate-[fadeIn_1s_ease-out_0.7s] opacity-0 [animation-fill-mode:both]"></div>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl animate-[fadeIn_1s_ease-out_1s] opacity-0 [animation-fill-mode:both] leading-relaxed">
          We don't just write code – we architect digital experiences that transform businesses and define the future of technology.
        </p>
        
        <div className="flex gap-4 animate-[fadeIn_1s_ease-out_1.5s] opacity-0 [animation-fill-mode:both]">
          <button onClick={onServicesClick} className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/30 hover:transform hover:-translate-y-1 flex items-center gap-2">
            <span>Explore our services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={onContactClick} className="px-6 py-4 text-lg font-semibold text-blue-400 bg-transparent border-2 border-blue-400 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400/10 hover:transform hover:-translate-y-1">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;