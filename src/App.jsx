import React, { useRef } from 'react';
import Header from './Header';
import Services from './Services';
import Vision from './Vision';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './App.css';

function App() {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='gap-4'>
      <Header 
        onContactClick={scrollToContact} 
        onServicesClick={scrollToServices} 
      />
      <div ref={servicesRef}>
      <Services />
      </div>
 
      <Vision />
      <div ref={contactRef}>
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;