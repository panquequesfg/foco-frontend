import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://foco-edu-8b710e3da8b3.herokuapp.com', // process.env.NEXT_PUBLIC_API_URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;