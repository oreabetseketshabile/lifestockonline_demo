import { useState } from 'react';
import axios from 'axios';

const usePaymentIntent = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createPaymentIntent = async (amount) => {
    setIsLoading(true);
    try {
      const response = await axios.post('YOUR_BACKEND_ENDPOINT/intents', { amount });
      setClientSecret(response.data.paymentIntent);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { clientSecret, error, isLoading, createPaymentIntent };
};

export default usePaymentIntent;
