import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
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
import styles from './Auctiondetails.style';

const { brand, darkLight, primary } = Colors;


const Auctiondetails =() =>{
 const [hidePassword,setHidePassword]=useState(true);
const [subcategory, setSubCategory] = React.useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
  const [messageType, setMessageType] = useState();
    const [Age, setAge] = useState('');

     const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/Auctiondetails';
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




  return(
 
     
    <ScrollView showsVerticalScrollIndicator={true}>
      <SafeAreaView>

        <PageTitle>lifestock Auction</PageTitle>
      
        <SubTitle style={styles.Title}>AUCTION DETAILS</SubTitle>
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
          initialValues={{ AuctionId: '', StartPrice:'',
          StartDate:'', EndDate:'', StartTime:'',EndTime:'',Quantity:''}}
  onSubmit={(values, { setSubmitting }) => {
              values = { ...values, End: Date};
              if (values.AuctionerId === '' || values.StartPrice === '' || values.StartDate === '' || values.EndDate === '' ||
              values.StartTime === '' || values.EndTime === '' || values.Quantity === '')
               {
                handleMessage('Please fill all the fields');
                setSubmitting(false);
              } else {
                handleRegister(values, setSubmitting);
              }

          }}

          >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
        
            <StyledFormArea >
              
              <MyTextInput
                style={styles.input}
                label=""
                icon=""
                placeholder="Auctioner ID"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('AuctionerId')}
                onBlur={handleBlur('AuctionerId')}
                value={values.AuctionerId}


              />



              <MyTextInput
              style={styles.input}
                label=""
                icon=""
                placeholder="Start Price"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('StartPrice')}
                onBlur={handleBlur('StartPrice')}
                value={values.StartPrice}
                keyboardType="numeric"

              />

 <MyTextInput
 style={styles.input}
                label=""
                icon=""
                placeholder="Start Date"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('StartDate')}
                onBlur={handleBlur('StartDate')}
                value={values.StartDate}
                keyboardType="numeric"

              />

              <MyTextInput
              style={styles.input}
                label=""
                icon=""
                placeholder="End Date"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('EndDate')}
                onBlur={handleBlur('EndDate')}
                value={values.EndDate}


              />

              <MyTextInput
              style={styles.input}
                label=""
                icon=""
                placeholder="Start Time"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('StartTime')}
                onBlur={handleBlur('StartTime')}
                value={values.StartTime}


              />

 <MyTextInput
 style={styles.input}
                label=""
                icon=""
                placeholder="End Time"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('EndTime')}
                onBlur={handleBlur('EndTime')}
                value={values.EndTime}
                keyboardType="numeric"

              />

                 <MyTextInput
                 style={styles.input}
                label=""
                icon=""
                placeholder="Quantity"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Quantity')}
                onBlur={handleBlur('Quantity')}
                value={values.Quantity}
                keyboardType="numeric"

              />


             <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                    Save Changes
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


export default Auctiondetails;
