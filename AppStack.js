import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from './app/App';
import OnboardingScreen from '././components/screen/OnboardingScreen';
import LoginScreen from '././components/screen/LoginScreen';
import Place_Auctions from '././components/screen/Place_Auctions';
import Messages from '././components/screen/Messages';
import CustomDrawer from './components/CustomDrawer';
import AboutUs from '././components/screen/AboutUs';
import Profile from './components/screen/Profile';
import ChangePassword from './components/screen/ChangePassword';
import DeleteAccount from './components/screen/DeleteAccount';
import AccountInfo from './components/screen/AccountInfo';
import Seller from './components/screen/Seller';
import AddBid from  './components/screen/AddBid';
import Bidder from  './components/screen/Bidder';
import Delete from './components/screen/Delete';
import Shipping from './components/screen/Shipping';
import InfoUsers from './components/screen/InfoUsers';
import Auctiondetails from './components/screen/Auctiondetails';
import PaymentInfo from './components/screen/PaymentInfo';
import Cart from './components/screen/Cart';
import Search2 from './components/screen/Search2';



  const AuthStack=()=>

  {
     const Drawer = createDrawerNavigator();
    return(

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor:'#006400',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor:'#333',
      drawerLabelStyle: {
        marginLeft: 15,
        fontFamily:'DMSans-Medium',
        fontSize: 15,
        fontWeight:700
      },
      }}>


      <Drawer.Screen name="HOME" component={App} />
      <Drawer.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Drawer.Screen name="PROFILE" component={Profile}/>
      <Drawer.Screen name="PLACE AUCTION" component={Place_Auctions}/>
      <Drawer.Screen name="BIDDER/SELLER" component={Bidder}/>
      <Drawer.Screen name="AUCTION INFO" component={Auctiondetails}/>
      <Drawer.Screen name= "CHAT" component={Messages}/>
      <Drawer.Screen name= "About Us" component={AboutUs}/>
      <Drawer.Screen name= "Cart" component={Cart}/>
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

    );
  };
  export default AuthStack;
