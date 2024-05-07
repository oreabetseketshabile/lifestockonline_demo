import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert,ActivityIndicator, ScrollView } from 'react-native';
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
//import { ScrollView } from 'react-native-gesture-handler';

const { brand, darkLight, primary } = Colors;

const Seller = ({ navigation }) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
    const [Age, setAge] = useState('');

     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/bidderregister';
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
      <StatusBar style="dark" />


        <PageTitle>lifestock Auction</PageTitle>
        <SubTitle>Bid Registration</SubTitle>
         {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
        <Formik
          initialValues={{fullName:'', Age:'', Address:'',cell:'', Identity:'', gender:'',cell:'',CardNumber:'', Brand:'', Location:'', email:''}}
          onSubmit={(values, { setSubmitting }) => {
              values = { ...values, Age: date };
              if (values.fullName === '' || values.Identity === '' || values.Age === '' || !values.gender === '' || !values.Address === '' || !values.CardNumber === ''|| !values.Location === ''|| !values.Brand === ''|| !values.email === ''|| !values.cell === '')
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


                 <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Full Name(s)"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}


              />
                <MyTextInput
                label="ID number/Passport"
                icon="passport-alt"
                placeholder="Identification"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Identity')}
                onBlur={handleBlur('Identity')}
                value={values.Identity}
                keyboardType="numeric"


              />
              <MyTextInput
                label="Age"
                icon="date"
                placeholder="Age"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Age')}
                onBlur={handleBlur('Age')}
                value={values.Age}
                keyboardType="numeric"

              />
                <MyTextInput
                label="Gender"
                icon="transgender"
                placeholder="Male/Female"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Gender')}
                onBlur={handleBlur('Gender')}
                value={values.Gender}


              />

               <MyTextInput
                label="Address"
                icon="dropbox"
                placeholder="P O Box"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Address')}
                onBlur={handleBlur('Address')}
                value={values.Address}

              />

                <MyTextInput
                label="Card Number"
                icon="credit-card"
                placeholder="0000 0000 0000 0000"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('CardNumber')}
                onBlur={handleBlur('CardNumber')}
                value={values.CardNumber}
                keyboardType="numeric"


              />
              <MyTextInput
                label="Farm Location"
                icon="compass"
                placeholder="Location"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Location')}
                onBlur={handleBlur('Location')}
                value={values.Location}

              />
              <MyTextInput
                label="Brand"
                icon="hipchat"
                placeholder="Brand"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Brand')}
                onBlur={handleBlur('Brand')}
                value={values.Brand}

              />
               <Line/>
               <SubTitle> Contact Information </SubTitle>
             <MyTextInput
                label="Email Address"
                icon="email"
                placeholder="******@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />


                <MyTextInput
                label="Cell"
                icon="phone"
                placeholder="(+000) 00-000-000"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('cell')}
                onBlur={handleBlur('cell')}
                value={values.cell}
                keyboardType="numeric"


              />
          <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                    Register
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
}

export default Seller;

