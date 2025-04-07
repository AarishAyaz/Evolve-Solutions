import React from 'react';
import ESols from './assets/ESols.jpg';

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 w-full bg-gradient-to-br from-gray-800 to-gray-950">
      <div className="w-[120px] h-[120px] mb-8 flex justify-center items-center">
        <img
          src={ESols}
          alt="Evolve Solutions"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <h1 className="text-5xl font-extrabold text-blue-400 mb-6 animate-[fadeInDown_1s_ease-out] shadow-blue-400/30 shadow-lg">
        Evolve Solutions
      </h1>
      <p className="text-2xl text-gray-300 mb-4 max-w-3xl animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:both]">
        "Your vision, our innovation – evolving to exceed expectations."
      </p>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl animate-[fadeIn_1s_ease-out_1s] opacity-0 [animation-fill-mode:both]">
        We don't just write code – we architect digital experiences that transform businesses and define the future of technology.
      </p>
      <button className="px-8 py-4 text-lg font-semibold text-gray-100 bg-blue-400 rounded-lg cursor-pointer transition-all duration-300 ease-in-out animate-[fadeIn_1s_ease-out_1.5s] opacity-0 [animation-fill-mode:both] hover:bg-blue-600 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-400/30">
        Explore our services!
      </button>
    </div>
  );
};

export default Header;