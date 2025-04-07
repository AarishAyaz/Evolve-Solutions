import React from 'react';
import Header from './Header';
import Services from './Services';
import Vision from './Vision';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='gap-4'>
      <Header />
      <Services />
      <Vision />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;