import {Text, View,ActivityIndicator} from 'react-native'
import React from 'react'
import {node} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import AuthStack from './AuthStack';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AppStack from '../../AppStack';

const Appnav = () => {
  const{isLoading,userToken}=useContext(AuthContext)
if(isLoading){
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <ActivityIndicator size={'large'}/>


  </View>

  );
}
  return (

userToken !== null ?

<AppStack/>
:<AuthStack/>

  );
}

export default Appnav;

