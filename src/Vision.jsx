import React from 'react';
import VisionCard from './VisionCard';
import { Lightbulb, Users, Rocket } from 'lucide-react';

const Vision = () => {
  const visionCards = [
    {
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge technologies and creative solutions",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Client Centric",
      description: "Your success is our priority - we deliver solutions that exceed expectations",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Rapid Delivery",
      description: "Swift development cycles without compromising on quality",
      icon: <Rocket className="w-6 h-6" />
    }
  ];
  
  const chooseBenefits = [
    "Expert development team with diverse tech stack",
    "Proven track record of successful deliveries",
    "Scalable solutions for growing businesses"
  ];
  
  return (
    <div className="py-24 px-8 bg-gradient-to-b from-black to-gray-900 w-full relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        
    
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYyYzcuNzMyIDAgMTQgNi4yNjggMTQgMTRoMnptLTQgMGMwLTcuNzMyLTYuMjY4LTE0LTE0LTE0djJjNi42MyAwIDEyIDUuMzcgMTIgMTJoMnptLTQgMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwdjJjNC40MSAwIDggMy41OSA4IDhoMnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat opacity-5"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 text-center">
            Transforming ideas into digital reality!
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl text-center font-light">
            Where innovation meets Excellence
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="flex-1 min-w-[280px]" style={{animation: "fadeInLeft 1s ease-out"}}>
            <div className="p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl mb-8 hover:border-gray-600 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed pl-14">
                Empowering growth, driving change – that's the Evolve Solutions promise. We strive to create innovative software solutions that transform businesses and elevate user experiences.
              </p>
            </div>
            
            <div className="p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Why choose us?
              </h3>
              <ul className="mt-4 pl-14 space-y-4">
                {chooseBenefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
       
          <div className="flex-1 min-w-[280px] space-y-6" style={{animation: "fadeInRight 1s ease-out"}}>
            {visionCards.map((card, index) => (
              <VisionCard 
                key={index} 
                {...card} 
                delay={(index + 1) * 0.2} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;