import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from '../../components/screen/LoginScreen';
import RegisterScreen from '../../components/screen/RegisterScreen';
import {Ionicons} from '@expo/vector-icons';
import {  Colors } from '../../styles/search';
const { brand, darkLight, primary } = Colors;
const Tab=createBottomTabNavigator();
const screenOptions={
tabBarShowLabel:false,
  tabBarHideOnkeyboard:true,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:70


}
}
const BottomNavigation = () => {
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={LoginScreen} 
      options={{tabBarIcon:({focused})=>{
        return <Ionicons name={focused ? "Home" : "Home-outline" }
        size={24}
          color={focused ? Colors.brand : Colors.primary}
        />
      }}
      }/>
      <Tab.Screen name="Register" component={RegisterScreen}
        options={{tabBarIcon:({focused})=>{
        return <Ionicons name={focused ? "person" : "person-outline" }
        size={24}
          color={focused ? Colors.brand : Colors.primary}
      />
        }
        }
        }/>

    </Tab.Navigator>
  )
}

export default BottomNavigation