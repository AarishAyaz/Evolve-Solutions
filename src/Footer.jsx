import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-950'>
      <hr />
      <p className='text-gray-200'>
        <FontAwesomeIcon icon={faCopyright} /> Evolve Solutions. All rights reserved!
      </p>
    </div>
  );
};

export default Footer;