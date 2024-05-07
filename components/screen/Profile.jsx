import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

const Profile = ({ navigation }) => {
 //const { logout } = useContext(AuthContext);

  return (


    <View style={styles.container}>
     <PageTitle>lifestock Auction</PageTitle>
     <Line />
      <Text style={styles.title}>PROFILE</Text>


      <Text style={styles.label}>EMAIL:</Text>
      <Text style={styles.label}>NAME:</Text>

      <Line />
      <SubTitle>SETTINGS</SubTitle>

      <TouchableOpacity onPress={() => navigation.navigate('AccountInfo')} style={styles.option}>
        <Text style={styles.optionText}>My Account Information</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={styles.option}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')} style={styles.option}>
        <Text style={styles.optionText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
  },
  logoutButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  logoutButtonText: {
    fontWeight: '800',
    color: '#333',
    fontSize: 15,
  },
  label: {
    fontWeight: '800',
    color: '#333',
    fontSize: 15,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 35,
    borderTopWidth: 4,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    fontSize: 26,
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 35,
  },
  optionText: {
    color: '#006400',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Profile;
