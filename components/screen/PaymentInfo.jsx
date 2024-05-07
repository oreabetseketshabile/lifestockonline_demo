import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
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
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons,Fontisto} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

const { brand, darkLight, primary } = Colors;

const PaymentInfo = ({ navigation }) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
const [subcategory, setSubCategory] = React.useState("");
  const [messageType, setMessageType] = useState();

const categories = [
  {key:'1', value:'VISA'},
  {key:'2', value:'MASTERCARD'},
  {key:'3', value:'PAYPAL'},
  {key:'4', value:'ORANGE MONEY'}
];



     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/PaymentInfo';
    axios.post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'Success') {
          handleMessage(message, status);
        } else {
          navigation.navigate('', { ...data });
        }
        setSubmitting(false);
      })
      .catch(error => {
        console.log(error.JSON);
        setSubmitting(false);
        handleMessage('An error occurred, check your network and try again!');
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  return (


    <ScrollView showsVerticalScrollIndicator={true}>

<SafeAreaView>

        <PageTitle>lifestock Auction</PageTitle>
        <Line/>
        <SubTitle>Payment Platform</SubTitle>
         {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />)}

        <Formik
        initialValues={{ cardholder:'', cardnumber:'', cvv:'',expiry:''}}
           onSubmit={(values, { setSubmitting }) => {
              values = { ...values };
              if (values.cardholder === '' || values.cardnumber ===''|| values.cvv===''|| values.expiry ==='')
               {
                handleMessage('Please fill all the fields');
                setSubmitting(false);
              } else {
                handleRegister(values, setSubmitting);
              }

          }}

          >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <StyledFormArea>



<SubTitle>SELECT METHOD OF PAYMENT FROM THE LIST BELOW</SubTitle>

              <SelectList
                setSelected={setCategory}
                boxStyles={{marginBottom:15}}
                data={categories}
                placeholder={'Select Category'}
                defaultOption={{key:'1',value:'VISA'}}
              />

              <SubTitle>Card Information</SubTitle>
               <MyTextInput
                label="Cardholder Name(s)"
                icon=""
                placeholder="cardholder name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('cardholder')}
                onBlur={handleBlur('cardholder')}
                value={values.cardholder}
/>

               <MyTextInput
                label="Card Number"
                icon=""
                placeholder="0000 1111 2222 3333"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('cardnumber')}
                onBlur={handleBlur('cardnumber')}
                value={values.cardnumber}
/>
               <MyTextInput
                label="CVV"
                icon=""
                placeholder="xxx"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('cvv')}
                onBlur={handleBlur('cvv')}
                value={values.cvv}
/>
               <MyTextInput
                label="Expiry Date"
                icon=""
                placeholder="00/00"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('expiry')}
                onBlur={handleBlur('expiry')}
                value={values.expiry}
/>





           <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={()=> navigation.navigate('PaymentInfo')} >
                    <ButtonText>
                    Add
                    </ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}


            </StyledFormArea>
          )}
        </Formik>

</SafeAreaView>
    </ScrollView>

  );
};
 const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>

      <LeftIcon>
        <Fontisto name={icon} size={23} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} secureTextEntry={isPassword && hidePassword} />

    </View>
  );
};


export default PaymentInfo;
