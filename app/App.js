import React from 'react';
import { View, StyleSheet ,Image,Text, ImageBackground} from 'react-native';
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
} from '../styles/search';
import { ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import { Stack} from 'expo-router';
import { ScreenHeaderBtn} from '../components';
import { COLORS, FONT, SIZES, SIZESS, icons} from "../constants";
import { useRouter } from 'expo-router';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { useState } from 'react';
//import styles from './popularjobcard.style';
import {Nearbyjobs, Popularjobs,Welcome} from '../components';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
  options={{
    headerStyle: { backgroundColor: COLORS.lightWhite },
    headerShadowVisible: true,
    headerLeft: () => (
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ScreenHeaderBtn
        iconUrl={icons.menu}
        dimension="60%"
      />
      <Image
          source={require('../assets/images/bull.png')}
          style={{ width: 40, height: 40, marginRight: 10 }}
        />

         <View style={styles.topbar}>


<Text>
<TextLink onPress={() => navigation.navigate('PrivateAuctions')}>
<TextLinkContent style={styles.headerTitle}>CATALOG |</TextLinkContent>
</TextLink></Text>



        <Text>
        <TextLink onPress={() => navigation.navigate('Cart')}>
        <TextLinkContent style={styles.headerTitle}> MY BIDS |</TextLinkContent>
        </TextLink></Text>


        <Text>
        <TextLink onPress={() => navigation.navigate('AboutUs')} >
        <TextLinkContent style={styles.headerTitle}>ABOUT US |</TextLinkContent>
        </TextLink></Text>


        <Text>
        <TextLink onPress={() => navigation.navigate('PaymentInfo')} >
        <TextLinkContent style={styles.headerTitle}>PAYMENT INFO |</TextLinkContent>
        </TextLink></Text>

        <Text>
        <TextLink onPress={() => navigation.navigate('Profile')} >
        <TextLinkContent style={styles.headerTitle}>PROFILE |</TextLinkContent>
        </TextLink></Text>

                <Text>
        <TextLink onPress={() => navigation.navigate('Messages')} >
          <TextLinkContent style={styles.headerTitle}>CHAT</TextLinkContent>
        </TextLink></Text>




      </View>
      </View>
    ),
    headerRight: () => (
      <View style={styles.sign}>


        <TextLink onPress={() => navigation.navigate('RegisterScreen')}>
          <TextLinkContent style={styles.headerTitle}>Hello,Sign-in</TextLinkContent>
        </TextLink>
        <ScreenHeaderBtn
          iconUrl={icons.search}
          dimension="60%"
        />

      </View>
    ),
      headerTitle: (""

    )
  }}
/>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ flex: 1, padding: SIZES.medium }}>


       <View style={styles.container2}>
          <ImageBackground style={styles.styleImage} source={require("../assets/images/livestock5.jpg")}>
          </ImageBackground>
       </View>


<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />

               </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage:{
  width:1340,
  height:260,
  marginBottom:40,

},
   container2: {
    width: 1340,
    height: 230,
    marginEnd: 40,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.blue,
    marginBottom:50
  },
    Title:{
fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.black,
    alignItems: 'center',
  },
   headerTitle:{
       fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.black,
  },

  topbar:{
flexDirection:'row',
 alignItems: 'center',
    justifyContent: 'center',
     gap: SIZES.small,

},
 sign:{
flexDirection:'row',
 alignItems: 'center',
    justifyContent: 'center',
     gap: SIZES.small,

},



    addbidBtn:{

   bottom:SIZES.xSmall,
    right:SIZES.xSmall,
      alignItems: 'center',

  },
});

export default Home;
