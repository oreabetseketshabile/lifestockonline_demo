import { useState } from "react";
import { StatusBar } from "expo-status-bar";
//import { Stack, useRouter } from "expo-router";
import { AppRegistry } from "react-native";
import React from 'react';
import {node} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS,icons,images,SIZE, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
//import App from '../app';
import 'react-native-gesture-handler';
import AuthStack from './navigation/AuthStack';
import AppStack from '../AppStack';
import { AuthProvider } from "../context/AuthContext";
import Appnav from "./navigation/Appnav";
import LoginScreen from "../components/screen/LoginScreen";
import Messages from '../components/screen/Messages';
//import CustomDrawer from './components/CustomDrawer';
import Place_Auctions from '../components/screen/Place_Auctions';
import AboutUs from '../components/screen/AboutUs';
import Profile from '../components/screen/Profile';
import ChangePassword from '../components/screen/ChangePassword';
import DeleteAccount from '../components/screen/DeleteAccount';
import AccountInfo from '../components/screen/AccountInfo';
import Seller from '../components/screen/Seller';
import AddBid from  '../components/screen/AddBid';
import Bidder from  '../components/screen/Bidder';
import Delete from '../components/screen/Delete';
import Shipping from '../components/screen/Shipping';
import InfoUsers from '../components/screen/InfoUsers';
import Auctiondetails from '../components/screen/Auctiondetails';
import PaymentInfo from '../components/screen/PaymentInfo';
import Cart from '../components/screen/Cart';
import Search2 from '../components/screen/Search2';
import DoneSubmitting from '../components/screen/DoneSubmitting';


import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const App = () => {
  const Drawer=createDrawerNavigator();
  return (
<AuthProvider>
    <Drawer.Navigator>


<Drawer.Screen name='AppNav' component={Appnav} />

      <Drawer.Screen name='LoginScreen' component={LoginScreen}/>
       <Drawer.Screen name="PROFILE" component={Profile}/>
      <Drawer.Screen name="PLACE AUCTION" component={Place_Auctions}/>
      <Drawer.Screen name="BIDDER/SELLER" component={Bidder}/>
      <Drawer.Screen name="AUCTION INFO" component={Auctiondetails}/>
      <Drawer.Screen name= "CHAT" component={Messages}/>
      <Drawer.Screen name= "About Us" component={AboutUs}/>
      <Drawer.Screen name= "Cart" component={Cart}/>
       <Drawer.Screen name= "DoneSubmitting" component={DoneSubmitting}/>
      <Drawer.Screen name="PAYMENT INFORMATION" component={PaymentInfo}/>
      <Drawer.Screen name="ChangePassword" component={ChangePassword} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="DeleteAccount" component={DeleteAccount} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="AccountInfo" component={AccountInfo} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="Seller" component={Seller} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="AddBid" component={AddBid} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="Delete" component={Delete} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="Shipping" component={Shipping} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="InfoUsers" component={InfoUsers} options={{ drawerLabel: () => null }}/>
      <Drawer.Screen name="Search2" component={Search2} />




    </Drawer.Navigator>
</AuthProvider>

  );
}
export default App;
