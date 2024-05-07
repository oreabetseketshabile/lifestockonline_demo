import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com', // Corrected property name to baseURL
headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export default ApiManager;
