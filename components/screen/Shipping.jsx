import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, Alert,ScrollView } from 'react-native';
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

import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

const { brand, darkLight, primary } = Colors;

const Shipping = ({ navigation }) => {
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
    const url = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/user/Shipping';
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
    <SafeAreaView>
    <ScrollView>
     
      <StatusBar style="dark" />
     

        <PageTitle>lifestock Auction</PageTitle>
            <Line/>
        <SubTitle>Shipping Address</SubTitle>
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
          initialValues={{ value: '', ApartmentNo:'',
          Address:'', values:'', ZipCode:''}}
  onSubmit={(values, { setSubmitting }) => {
              values = { ...values, ZipCode: Date};
              if (values.Address === '' || values.values === '' || values.ApartmentNo === '' || values.value === '' ||
              values.PostalAddress === '')
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



<Line/>


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


export default Shipping;
