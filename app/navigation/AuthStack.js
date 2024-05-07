//import { Stack } from 'expo-router';
import React from 'react'
 import {Colors} from '../../styles/search';
import {View, Text} from 'react-native'
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import OnboardingScreen from '../../components/screen/OnboardingScreen';
//import { COLORS, FONT, SIZES } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../../components';
import LoginScreen from '../../components/screen/LoginScreen';
import RegisterScreen from '../../components/screen/RegisterScreen';
import Cart from '../../components/screen/Cart';
import PaymentInfo from '../../components/screen/PaymentInfo';
import ProductDetails from '../../components/home/productdetails/ProductDetails';
import App from '../App';
import ChangePassword from '../../components/screen/ChangePassword';
import CustomDrawer from '../../components/CustomDrawer';
import PublicAuctions from '../../components/common/ShowAll/PublicAuctions'
import PrivateAuctions from '../../components/common/ShowAll/PrivateAuctions'
import Search2 from '../../components/screen/Search2';
import Profile from '../../components/screen/Profile';
import AccountInfo from '../../components/screen/AccountInfo';
import DeleteAccount from '../../components/screen/DeleteAccount';
import InfoUsers from '../../components/screen/InfoUsers';
import Shipping from '../../components/screen/Shipping';
import Bidder from '../../components/screen/Bidder';
import AddBid from '../../components/screen/AddBid';
import Delete from '../../components/screen/Delete';
import Seller from '../../components/screen/Seller';
import Messages from '../../components/screen/Messages';
import AboutUs from '../../components/screen/AboutUs';
import DoneSubmitting from '../../components/screen/DoneSubmitting';
const Stack = createNativeStackNavigator();
const { tertiary,primary } = Colors;

const AuthStack =() =>{
  return(


    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"transparent"
      },
      headerTintColor:tertiary,
      headerTransparent: true,
      headerTitle:"",
      headerLeftContainerStyle:{
        paddingLeft:20
      }

      }}

      >
      <Stack.Screen options={{ headerTintColor: tertiary}}
        name="OnboardingScreen"
        component={OnboardingScreen}


      />
       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

       <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    <Stack.Screen
        name="Cart"
        component={Cart}
      />
         <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
      />
         <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="PrivateAuctions"
        component={PrivateAuctions}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="PublicAuctions"
        component={PublicAuctions}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="Search2"
        component={Search2}
        options={{headerShown:true}}
      />

  <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{headerShown:true}}
      />

  <Stack.Screen
        name="CustomDrawer"
        component={CustomDrawer}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="InfoUsers"
        component={InfoUsers}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="Bidder"
        component={Bidder}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="AddBid"
        component={AddBid}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name="Delete"
        component={Delete}
        options={{headerShown:true}}
      />

      <Stack.Screen
        name="Seller"
        component={Seller}
        options={{headerShown:true}}
      />

 <Stack.Screen
        name="DoneSubmitting"
        component={DoneSubmitting}
        options={{headerShown:true}}
      />

       <Stack.Screen
        name="AboutUs"
        component={AboutUs}
      />

       <Stack.Screen
        name="Messages"
        component={Messages}
      /> 
  


       </Stack.Navigator>
  );
};

export default AuthStack;
