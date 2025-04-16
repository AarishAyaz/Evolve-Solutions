import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCopyright, 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faLinkedinIn, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: ['Full Stack Development', 'Game Development', 'Data Science', 'DevOps'],
    company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    resources: ['Blog', 'Case Studies', 'Documentation', 'FAQs']
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-16 pb-8 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
 
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mr-3">
                <span className="text-white font-bold text-xl">ES</span>
              </div>
              <h3 className="text-xl font-bold text-white">Evolve Solutions</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality with cutting-edge technologies and innovative solutions.
            </p>
  
            <div className="flex space-x-4">
              {[
                { icon: faTwitter, href: '#twitter' },
                { icon: faLinkedinIn, href: '#linkedin' },
                { icon: faGithub, href: '#github' },
                { icon: faInstagram, href: '#instagram' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          
       
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                      <span className="mr-2 text-xs">&#9654;</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
    
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: faLocationDot, text: '123 Tech Plaza, San Francisco, CA 94103' },
                { icon: faPhone, text: '+1 (555) 123-4567' },
                { icon: faEnvelope, text: 'info@evolvesolutions.com' }
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon icon={contact.icon} className="text-blue-400 mt-1 mr-3" />
                  <span className="text-gray-400">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with our latest projects and tech insights</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 py-3 px-4 bg-gray-900 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-r-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
  
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <FontAwesomeIcon icon={faCopyright} className="mr-2" /> 
            {currentYear} Evolve Solutions. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;