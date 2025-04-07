import React from 'react';
import VisionCard from './VisionCard';

const Vision = () => {
  const visionCards = [
    {
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge technologies and creative solutions"
    },
    {
      title: "Client Centric",
      description: "Your success is our priority - we deliver solutions that exceed expectations"
    },
    {
      title: "Rapid Delivery",
      description: "Swift development cycles without compromising on quality"
    }
  ];
  
  return (
    <div className="py-20 px-8 bg-gray-950 w-full flex flex-col items-center">
      <h1 className="text-4xl text-blue-400 mb-4 text-center">Transforming ideas into digital reality!</h1>
      <p className="text-xl text-gray-300 mb-12 text-center">Where innovation meets Excellence</p>
      <div className="w-full">
        <div className="w-full max-w-6xl mx-auto flex gap-12 justify-center flex-wrap px-4">
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-3xl text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">Empowering growth, driving change – that's the Evolve Solutions promise.</p>
            <br/>
            <h2 className="text-3xl text-white mb-4">Why choose us?</h2>
            <ul className="mt-4">
              {[
                "Expert development team with diverse tech stack",
                "Proven track record of successful deliveries",
                "Scalable solutions for growing businesses"
              ].map((item, index) => (
                <li key={index} className="mb-2 pl-6 relative text-gray-300">
                  <span className="absolute left-0 text-blue-400">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[calc(50%-1rem)]">
            {visionCards.map((card, index) => (
              <VisionCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;