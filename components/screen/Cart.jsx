import React, { useState } from 'react';
import { Stack, useRouter } from "expo-router";
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { icons } from '../../constants';
import { ScreenHeaderBtn } from '..';
import InputField from './InputField';
import CustomButton from './CustomButton';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { InnerContainer,
   PageTitle,
   StyledContainer,
   PageLogo,
    SubTitle,
    StyledFormArea,
     LeftIcon,
    StyledInputLabel,
     StyledTextInput,
     RightIcon,
     Colors,
     StyledButton,
     ButtonText ,
    MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent
} from '../../styles/search';
import styles from './Cart.style';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons,Fontisto} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const { brand, darkLight, primary } = Colors;

const Cart = (navigation) => {
return (
<SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary}}>

   <Stack.Screen
  options={{
    headerStyle: {backgroundColor:Colors.primary,},
    headerShadowVisible: true,
  headerTitle:"My Cart"}}
  />
  <SubTitle style={styles.descriptionWrapper}>View your selected auctions below and proceed to payout your cart</SubTitle>



</SafeAreaView>


  )
}


export default Cart;
