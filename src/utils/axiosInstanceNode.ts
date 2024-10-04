import axios from 'axios';

const axiosInstanceNode = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstanceNode;
