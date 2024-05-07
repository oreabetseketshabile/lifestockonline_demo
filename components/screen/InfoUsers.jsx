import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert ,ScrollView} from 'react-native';
import { icons } from '../../constants';
import { ScreenHeaderBtn } from '..';
import InputField from './InputField';
import CustomButton from './CustomButton';
import axios from 'axios';
import {COLORS, SIZES } from '../../constants';
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

const InfoUsers = ({ navigation }) => {
  const [hidePassword,setHidePassword]=useState(true);

const [subcategory, setSubCategory] = React.useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
  const [messageType, setMessageType] = useState();
    const [PhoneNumber, setPhoneNumber] = useState('');

     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/InfoUsers';
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


const categories = [
  {key:'M', value:'Mr'},
  {key:'D', value:'Dr'},
  {key:'s', value:'Ms'},
  {key:'rs', value:'Mrs'},

];


  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>


        <PageTitle>lifestock Auction</PageTitle>
            <Line/>
        <SubTitle>User Information</SubTitle>
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
          initialValues={{ values: '', email:'', Surname:'',
          Name:'', PhoneNumber:''}}
     onSubmit={(values, { setSubmitting }) => {
              values = { ...values, email: Date};
              if (values.values === '' || values.Name === '' || values.Surname === '' || values.email === '' ||
              values.PhoneNumber === '')
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



 <Line/>
               <SubTitle> Title</SubTitle>


              <SelectList
                setSelected={setCategory}
                data={categories}
                placeholder={'Select Category'}
                defaultOption={{key:'M',value:'Mr'}}
                  onChangeText={handleChange('values')}
                onBlur={handleBlur('values')}
                value={values.values}
              />

              <MyTextInput
                label=""
                icon=""
                placeholder="Name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Name')}
                onBlur={handleBlur('Name')}
                value={values.Name}

              />

               <MyTextInput
                label=""
                icon=""
                placeholder="Surname"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Surname')}
                onBlur={handleBlur('Surname')}
                value={values.Surname}

              />
                <MyTextInput
                label=""
                placeholder="email"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"

              />
                 <MyTextInput
                label=""
                icon=""
                placeholder="Phone (xxx) xxx-xxx"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('PhoneNumber')}
                onBlur={handleBlur('PhoneNumber')}
                value={values.PhoneNumber}
                keyboardType="numeric"

              />


            <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                    Save
                    </ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}


<Line/>


            </StyledFormArea>
          )}
        </Formik>
    </View>
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


export default InfoUsers;
