import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/signin';
      const response = await axios.post(url, credentials);
      const { accessToken } = response.data;

      setUserToken(accessToken);
      await AsyncStorage.setItem('userToken', accessToken);

      return true; // Login successful
    } catch (error) {
      console.log(error);
      return false; // Login failed
    }
  };
    const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setUserToken(userToken);
      }
    } catch (error) {
      console.log(`isLoggedIn error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ handleLogin,logout,isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
