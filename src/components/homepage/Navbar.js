import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
      <FontAwesomeIcon icon={faTasks} className="mr-2" />
        <a>TodoFlow</a>
      </div>
      <div>
        <a>
          <button className="mr-4 py-2 px-4 bg-primary hover:bg-opacity-80 text-white rounded-lg">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Login
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
