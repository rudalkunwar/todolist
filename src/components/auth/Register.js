import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function Register() {
  return (
   <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Get started with TodoFlow.</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            id="username"
            name="username"
            autoComplete='off'
            className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-500" />
          <input
            type="email"
            id="email"
            name="email"
            autoComplete='off'
            className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-500" />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete='off'
            className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
    </form>

    <p className="text-center mt-4">Or register with</p>
    <div>
    <button
      className="w-full mt-2 bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-600 transition duration-300"
    >
      <FontAwesomeIcon icon={faGoogle} size="lg" className='text-yellow-400 pr-2' />
      <span>Google</span>
    </button>
    </div>
  </div>
  )
}
