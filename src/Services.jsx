import React from 'react';
import ServiceCard from './ServiceCard';
import { Code, Gamepad2, Database, Terminal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web solutions combining robust backend systems with elegant frontend interfaces.",
      icon: <Code className="w-10 h-10" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Game Development",
      description: "Immersive gaming experiences across multiple platforms using cutting-edge technologies.",
      icon: <Gamepad2 className="w-10 h-10" />,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights using advanced analytics and machine learning.",
      icon: <Database className="w-10 h-10" />,
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "DevOps",
      description: "Streamline development operations with automated CI/CD pipelines, container orchestration.",
      icon: <Terminal className="w-10 h-10" />,
      gradient: "from-amber-500 to-orange-400"
    }
  ];
  
  return (
    <div className="py-24 px-8 bg-gradient-to-b from-gray-900 to-black w-full flex flex-col items-center relative">
   
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
  
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
   
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 text-center">
            Our Expertise & Services
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl text-center font-light italic">
            "Empowering growth, driving change – that's the Evolve Solutions promise."
          </p>
        </div>
        
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;