import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../homepage/Navbar';

function Page404() {
  return (
    <>
    <Navbar/>
    <div className='h-[39.45rem] flex justify-center items-center bg-gray-900'>
      <div className='flex flex-col'>
        <FontAwesomeIcon icon={faExclamationTriangle} className='text-yellow-500 text-[100px]'/>
        <p className='text-white' >Page not Found!</p>
      </div>
    </div>
    </>
  );
}

export default Page404;
