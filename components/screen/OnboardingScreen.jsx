import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS,icons} from '../../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../../components';


const OnboardingScreen = (props) => {
  return(
 <SafeAreaView
  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <View style={{ marginTop: 20 }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#006400',
          fontFamily: 'DMSans-Bold',
          marginBottom:50
        }}>
          LIFESTOCK-AUCTION
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('App')}
        style={{
      flexDirection:'row',
      backgroundColor:'#006400',
      padding:20,
      borderRadius:30,
      marginBottom:30
        }}
      >
       <Text style={{
        flexDirection:'row',
        fontSize:25,
        color:'#fff',
        fontWeight:'700',
        textAlign:'center'
        }}> BEGIN AUCTIONING </Text>

      </TouchableOpacity>
    </SafeAreaView>


  );
};

export default OnboardingScreen;
