import React, { useState } from 'react';
import { View, Text, ScrollView,SafeAreaView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

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

import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

const { brand, darkLight, primary } = Colors;

const ChangePassword = ({ navigation }) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
  const [messageType, setMessageType] = useState();
    const [Age, setAge] = useState('');

     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/deletepassword';
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
    <SafeAreaView>
    <ScrollView>
    
   

        <PageTitle>lifestock Auction</PageTitle>
        <Line/>
        <SubTitle>CHANGE PASSWORD</SubTitle>
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
          initialValues={{ Old:'',New:'',Confirm:''}}
           onSubmit={(values, { setSubmitting }) => {
              values = { ...values };
              if (values.Old === '' || values.New === '' || values.Confirm === '' )
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



<SubTitle> Add your old password to permanently change your Lifestock Auction account Password</SubTitle>
<SubTitle>NB: ACCOUNT PASSWORD WILL BE CHANGED PERMANENTLY</SubTitle>

               <MyTextInput
                label="Old Password"
                icon="lock"
                placeholder="old password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Old')}
                onBlur={handleBlur('Old')}
                value={values.Old}
/>
                             <MyTextInput
                label="New Password"
                icon="lock"
                placeholder="new password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('New')}
                onBlur={handleBlur('New')}
                value={values.New}
/>
                               <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="confirm password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Confirm')}
                onBlur={handleBlur('Confirm')}
                value={values.Confirm}
/>

             <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                    Change Password
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
    
    
    </ScrollView>
    </SafeAreaView>
  );
};
 const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
     <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        onChangeText={props.onChangeText} // Pass the onChangeText prop from props
        value={props.value} // Pass the value prop from props
      />

    </View>
  );
};


export default ChangePassword;
