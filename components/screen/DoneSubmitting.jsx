import React from 'react'
import {View, Text, Image,} from 'react-native'




const DoneSubmitting =() =>{
  return(
     <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ fontFamily: 'DMSans-Bold',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        color: '#333',
        marginBottom: 30 }}>
         <script>{

           alert('Payment was successful.')
         };
         
        </script> 
         your submission was successful , thank you for submitting! 
        </Text>
         
        <left>
         <img   src="check.png" width="50" height="50"></img>
        </left>
      </View>
  )
}

export default DoneSubmitting;