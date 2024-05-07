import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, TouchableOpacity, Alert ,ScrollView} from 'react-native';
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


const { brand, darkLight, primary } = Colors;

const Delete = ({ navigation }) => {
  const [hidePassword,setHidePassword]=useState(true);
  const [category, setCategory] = React.useState("");
const [subcategory, setSubCategory] = React.useState("");

const categories = [
  {key:'1', value:'Injury'},
  {key:'2', value:'Death'},
  {key:'3', value:'Disease'},
  {key:'4', value:'Change on BREEDING Status e.g female giving birth while still on auction'},
  {key:'5', value:'Change of DISEASE Status of place of origin e.g outbreak of disease in a particular area/ Loss of body condition'},
  {key:'6', value:'Suspected to be acquired in a dubious form'},
  {key:'7', value:'Does not conform to breed standards or association standards'},
  {key:'8', value:'Does not comply with branding/identification per the branding act (individual brand, zonal brand,  etc.) '},
];

  return (
    <SafeAreaView>
    <ScrollView>
   

        <PageTitle>lifestock Auction</PageTitle>
        <SubTitle>Delete Auction(s)</SubTitle>

        <Formik
          initialValues={{ Reason: "", OtherReason: "" ,Change :"",
          Disease:""}}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
            <SubTitle>Upload current pictures and videos(less than 2 weeks old)</SubTitle>

            <Line />
            <SubTitle>Select The Reason Of Retraction In The List Below</SubTitle>

              <SelectList
                setSelected={setCategory}
                boxStyles={{marginBottom:15}}
                data={categories}
                placeholder={'Select Category'}
                defaultOption={{key:'1',value:'injury'}}
              />

            <Line />

               <MyTextInput
                label="Any other reason (Please state if applicable)"

                onChangeText={handleChange('OtherReason')}
                onBlur={handleBlur('OtherReason')}
                value={values.OtherReason}

              />

            <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Delete Auction
                </ButtonText>
              </StyledButton>


<Line/>


            </StyledFormArea>
          )}
        </Formik>

    </ScrollView>
    </SafeAreaView>
  );
};
 const MyTextInput = ({ label, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>

      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} secureTextEntry={isPassword && hidePassword} />

    </View>
  );
}

export default Delete;
