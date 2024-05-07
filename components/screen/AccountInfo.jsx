
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';

import { AuthContext } from '../../context/AuthContext';
import { icons } from '../../constants';
import { ScreenHeaderBtn } from '..';
import InputField from './InputField';
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



const AccountInfo = ({navigation}) => {
return(
    <SafeAreaView style={{flex:1,justifyContent:'Top'}}>

      <View style={styles.container}>
      <PageTitle>lifestock Auction</PageTitle>
     <Line />
      <Text style={styles.title}>Account Information</Text>

    <View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select to Edit</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('InfoUsers')} style={styles.option}>
        <Text style={styles.optionText}>User Information</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Shipping')} style={styles.option}>
        <Text style={styles.optionText}>Shipping Address</Text>
      </TouchableOpacity>


      </View>
    </View>

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    color: '#333',
    marginBottom: 50,
  },
   section: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 35,
    borderTopWidth: 0,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    textAlign: 'left',
  fontWeight: '500',
    color: '#333',
    marginBottom: 20,
    fontSize: 20,
    flex: 1,
  },
  AccountInfo: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 35,
  },
  optionText: {
    color: '#006400',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default AccountInfo;
