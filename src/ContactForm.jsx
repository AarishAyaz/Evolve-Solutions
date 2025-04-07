import React from 'react';

const ContactForm = () => {
  return (
    <div className="py-20 px-8 bg-gradient-to-br from-gray-800 to-gray-950 w-full flex flex-col items-center">
      <div>
        <h1 className="text-4xl text-blue-400 mb-12 text-center">Lets convert your vision into reality</h1>
      </div>
      <div className="w-full max-w-[600px] mx-auto p-12">
        <h1 className="text-3xl text-white mb-8">Contact Us</h1>
        <form action="mailto:aarishk623@gmail.com" method="post" encType="text/plain">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-gray-300 font-medium">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
              className="w-full py-3 px-3 bg-gray-950 border border-gray-700 rounded-md text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/10"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-300 font-medium">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              className="w-full py-3 px-3 bg-gray-950 border border-gray-700 rounded-md text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/10"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-gray-300 font-medium">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Enter your message" 
              required 
              className="w-full py-3 px-3 bg-gray-950 border border-gray-700 rounded-md text-white h-[150px] resize-y transition-all duration-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/10"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-4 bg-blue-400 text-white font-semibold rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;