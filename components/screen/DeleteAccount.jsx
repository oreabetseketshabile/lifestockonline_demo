import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator, ScrollView} from 'react-native';
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
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

const { brand, darkLight, primary } = Colors;

const DeleteAccount = ({ navigation }) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
  const [messageType, setMessageType] = useState();
    const [Age, setAge] = useState('');

     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/deleteaccount';
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
        <SubTitle>Delete Account</SubTitle>
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
        initialValues={{ Delete:''}}
           onSubmit={(values, { setSubmitting }) => {
              values = { ...values };
              if (values.Delete === '' )
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



<SubTitle> Add your email to permanently delete your Lifestock Auction account</SubTitle>
<SubTitle>NB: ACCOUNT WILL BE DELETED PERMANENTLY</SubTitle>

               <MyTextInput
                label="EMAIL"
                icon="email"
                placeholder="email address"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Delete')}
                onBlur={handleBlur('Delete')}
                value={values.Delete}
/>

           <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                    Delete Account
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
        <Fontisto name={icon} size={23} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} secureTextEntry={isPassword && hidePassword} />

    </View>
  );
};


export default DeleteAccount;
