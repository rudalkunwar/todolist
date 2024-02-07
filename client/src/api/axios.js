// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/', // Your backend server URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers here
  },
});
export default instance;