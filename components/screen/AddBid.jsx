import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
import { icons } from '../../constants';
import { ScreenHeaderBtn } from '..';
import InputField from './InputField';
import CustomButton from './CustomButton';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { InnerContainer, PageTitle, StyledContainer, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors, StyledButton, ButtonText, MsgBox, Line, ExtraText, ExtraView, TextLink, TextLinkContent } from '../../styles/search';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

const { brand, darkLight, primary } = Colors;

const AddBid = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState();
  const [category, setCategory] = React.useState("");
  const [messageType, setMessageType] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleRegister = async (credentials, setSubmitting) => {
    handleMessage(null);
    const dataUrl = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/AddAuction/AddAuction'; // Endpoint for form data
    const imageUrl = 'https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/api/save'; // Endpoint for images

    try {
      // Upload image first
      if (selectedImage) {
        const formData = new FormData();
        const fileName = selectedImage.split('/').pop();
        const fileType = fileName.split('.').pop();
        formData.append('photo', {
          uri: selectedImage,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        });

        await axios.post(imageUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      // Then upload other form data
      const response = await axios.post(dataUrl, credentials);

      const result = response.data;
      const { message, status, data } = result;

      if (status !== 'Success') {
        handleMessage(message, status);
      } else {
        navigation.navigate('', { ...data });
      }
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      handleMessage('An error occurred, check your network and try again!');
    }
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  const categories = [
    { key: 'cw', value: 'cow' },
    { key: 'go', value: 'goat' },
    { key: 'sh', value: 'sheep' },
    { key: 'hr', value: 'horse' },
    { key: 'dk', value: 'donkey' }
  ];

  const handleImagePick = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setSelectedImage(result.uri);
        }
      } else {
        Alert.alert('Permission required', 'You need to grant permission to access the library.');
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  return (

      <ScrollView showsVerticalScrollIndicator={true}>
<SafeAreaView >
          <StatusBar style="dark" />

            <PageTitle>lifestock Auction</PageTitle>
            <SubTitle>Place Auction</SubTitle>
            <Formik
              initialValues={{
                number: "", Pedigree: "", Breed: "", Results: "", value: "",
                Age: "", Proof: "", Status: ""
              }}
              onSubmit={(values, { setSubmitting }) => {
                values = { ...values, Age: date };
                if (values.Breed === '' || values.Age === '' || values.Pedigree === '' || !values.Results === '' || !values.number === '' ||
                  !values.Status === '' || !values.Proof === '' || !values.value === '') {
                  handleMessage('Please fill all the fields');
                  setSubmitting(false);
                } else {
                  handleRegister(values, setSubmitting);
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                <StyledFormArea>
                  <SubTitle>Upload current pictures and videos (less than 2 weeks old)</SubTitle>
                  <TouchableOpacity onPress={handleImagePick}>
                    <Ionicons name="image" size={50} color={brand} />
                  </TouchableOpacity>
                  {selectedImage && (
                    <View>
                      <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
                    </View>
                  )}
                  <MyTextInput
                    label="Animal Breed"
                    icon="transgender"
                    placeholder="Breed"
                    onChangeText={handleChange('Breed')}
                    onBlur={handleBlur('Breed')}
                    value={values.Breed}
                  />
                  <MyTextInput
                    label="Age Of Animal"
                    icon="date"
                    placeholder="Age"
                    onChangeText={handleChange('Age')}
                    onBlur={handleBlur('Age')}
                    value={values.Age}
                    keyboardType="numeric"
                  />
                  <MyTextInput
                    label="Pedigree Information"
                    icon="dropbox"
                    placeholder="MoA Template of Pedigree Information"
                    onChangeText={handleChange('Pedigree')}
                    onBlur={handleBlur('Pedigree')}
                    value={values.Pedigree}
                  />
                  <Line />
                  <MyTextInput
                    label="Fertility Test Results"
                    icon="test-tube"
                    placeholder="Results"
                    onChangeText={handleChange('Results')}
                    onBlur={handleBlur('Results')}
                    value={values.Results}
                  />
                  <Line />
                  <MyTextInput
                    label="Number of Calves"
                    icon="info"
                    placeholder="Number"
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    value={values.number}
                    keyboardType="numeric"
                  />
                  <Line />
                  <MyTextInput
                    label="Pregnancy Status"
                    icon="info"
                    placeholder="Status"
                    onChangeText={handleChange('Status')}
                    onBlur={handleBlur('Status')}
                    value={values.Status}
                  />
                  <MyTextInput
                    label="Proof of Pregnancy"
                    icon="info"
                    placeholder="Proof"
                    onChangeText={handleChange('Proof')}
                    onBlur={handleBlur('Proof')}
                    value={values.Proof}
                  />
                  <MsgBox type={messageType}>{message}</MsgBox>

                  <StyledButton onPress={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? <ActivityIndicator size="large" color={primary} /> : <ButtonText>Register</ButtonText>}
                  </StyledButton>
                  <Line />
                </StyledFormArea>
              )}
            </Formik>

</SafeAreaView>
      </ScrollView>

  );
};

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Fontisto name={icon} size={23} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default AddBid;
