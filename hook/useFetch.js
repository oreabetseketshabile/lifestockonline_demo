import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/placeBid/placeBid');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      // You may want to handle the error in a more user-friendly way, like showing it on the UI.
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Add endpoint and query to the dependency array

const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
