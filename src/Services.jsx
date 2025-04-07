import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web solutions combining robust backend systems with elegant frontend interfaces."
    },
    {
      title: "Game Development",
      description: "Immersive gaming experiences across multiple platforms using cutting-edge technologies."
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights using advanced analytics and machine learning."
    },
    {
      title: "DevOps",
      description: "Streamline development operations with automated CI/CD pipelines, container orchestration."
    }
  ];
  
  return (
    <div className="py-20 px-8 bg-gray-800 w-full flex flex-col items-center">
      <h1 className="text-4xl text-blue-400 mb-4 text-center">Our Experties and Services</h1>
      <p className="text-xl text-gray-300 mb-12 text-center">
        "Empowering growth, driving change – that's the Evolve Solutions promise."
      </p>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-8 mb-8 justify-center w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;