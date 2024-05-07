import React from 'react'
import {View, Text} from 'react-native'


const AboutUs =() =>{
  return(
     <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ fontFamily: 'DMSans-Bold',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '600',
        color: '#333',
        marginBottom: 30 }}>
          About Us
        </Text>
      </View>
  )
}

export default AboutUs;
