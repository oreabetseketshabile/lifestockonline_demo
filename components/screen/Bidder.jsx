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


const Bidder = ({ navigation }) => {
 //const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
         <PageTitle>lifestock Auction</PageTitle>

      <Text style={styles.title}>AUCTIONEER</Text>
<Line/>



      <TouchableOpacity onPress={() => navigation.navigate('Seller')} style={styles.option}>
        <Text style={styles.optionText}>Auctioneer Registration</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AddBid')} style={styles.option}>
        <Text style={styles.optionText}>Place Auction</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Delete')} style={styles.option}>
        <Text style={styles.optionText}>Delete Auction</Text>
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

export default Bidder;
