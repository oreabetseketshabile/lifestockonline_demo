import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, TouchableOpacity, Alert, ActivityIndicator,ScrollView } from 'react-native';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import axios from 'axios';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from '../../styles/search';
import { StatusBar } from 'expo-status-bar';
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

const { brand, darkLight, primary } = Colors;

const RegisterScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
    const [dateOfBirth, setDateOfBirth] = useState('');
 const [subcategory, setSubCategory] = React.useState("");
const [category, setCategory] = React.useState("");
  const [Age, setAge] = useState('');

  const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/signup';
    axios.post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'Success') {
          handleMessage(message, status);
        } else {
          navigation.navigate('LoginScreen', { ...data });
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
  {key:'Mogo', value:'Mogoditshane'},
  {key:'mm', value:'Mahalapye'},
  {key:'ga', value:'Gaborone'},
  {key:'Mole', value:'Molepolole'},
  {key:'Kany', value:'Kanye'},
   {key:'ft', value:'Francistown'},
  {key:'M', value:'Mochudi'},
  {key:'se', value:'Serowe'},
  {key:'k', value:'kasane'},
  {key:'Jwag', value:'Jwaneng'},
   {key:'C', value:'Central District'},
  {key:'kg', value:'Kgalagadi District'},
  {key:'g', value:'Ghanzi'},
  {key:'ne', value:'Nort-East Districtnw'},
  {key:'Nw', value:'North-West District'},
  {Key:'kgg', value:'Kgatleng District'},
{Key:'kgg',value:'South-East District'},
  {key:'so', value:'Southern District'},
];

  return (
<ScrollView showsVerticalScrollIndicator={true}>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>lifestock Auction</PageTitle>
          <SubTitle>Account Register</SubTitle>
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
            initialValues={{ name: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, dateOfBirth: date };
              if (values.email === '' || values.password === '' || values.name === '' || !values.dateOfBirth === '' ||
              !values.confirmPassword === '' || values.Address === '' || values.values === '' || values.ApartmentNo === '' || values.value === '' ||
              values.PostalAddress === '') {
                handleMessage('Please fill all the fields');
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                handleMessage('Passwords do not match');
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
                  placeholder="Oreabetse"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="oreabetse@gmail.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
  label="Date of Birth (MM-DD-YY)"
  icon="calendar"
  placeholder="MM-DD-YY"
  placeholderTextColor={darkLight}
  onChangeText={handleChange('dateOfBirth')} // Update onChangeText
  onBlur={handleBlur('dateOfBirth')}
  value={values.dateOfBirth} // Update value
  keyboardType="numeric"
/>

  <MyTextInput
                label=""
                icon=""
                placeholder="Street Address"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Address')}
                onBlur={handleBlur('Address')}
                value={values.Address}


              />

<SubTitle> State/Province</SubTitle>


              <SelectList
              style={'ScrollView'}
                setSelected={setCategory}
                data={categories}
                placeholder={'Select Category'}
                defaultOption={{key:'Mogo',value:'Mogoditshane'}}
                onChangeText={handleChange('value')}
                onBlur={handleBlur('value')}
                value={values.value}
              />

              <MyTextInput
                label=""
                icon=""
                placeholder="HouseNo"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('ApartmentNo')}
                onBlur={handleBlur('ApartmentNo')}
                value={values.ApartmentNo}
                keyboardType="numeric"

              />

               <SubTitle> City</SubTitle>


              <SelectList

                setSelected={setCategory}
                data={categories}
                placeholder={'Select Category'}
                defaultOption={{key:'ga',value:'Gaborone'}}
                onChangeText={handleChange('values')}
                onBlur={handleBlur('values')}
                value={values.values}
              />


                 <MyTextInput
                label=""
                icon=""
                placeholder="Postal Address (0000)"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('PostalAddress')}
                onBlur={handleBlur('PostalAddress')}
                value={values.PostalAddress}
                keyboardType="numeric"

              />



                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="********"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="********"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={false}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
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
                <Line />
                <ExtraView>
                  <ExtraText>Already have an Account?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('LoginScreen')}>
                    <TextLinkContent>Login</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
</ScrollView>
  );
};


// Update the MyTextInput component to handle date input
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
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};
export default RegisterScreen;

