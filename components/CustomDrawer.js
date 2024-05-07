import React from 'react';
import { useContext } from 'react';
import {View, Text, ImageBackground,Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {icons} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import CustomButton from '../components/screen/CustomButton';
import { AuthContext } from '../context/AuthContext';

import { createDrawerNavigator } from '@react-navigation/drawer';




const CustomDrawer =(props) =>{

  //const {logout}=useContext (AuthContext);

  return(

  <View style = {{flex:1}}>



 {/* <ImageBackground source = {require('')} style={{padding:20}}>
 <Image source = {require('../assets/images/userprofile.jpg')}
 style={{height:80,width:80,boarderRadius:40,marginBottom:20,padding:10 }}/>

    <Text style= {{fontSize:25,fontWeight:800,
    color:'#fff',
    marginBottom:5}}> Hello User
    </Text>

   </ImageBackground> */}

      <ScrollView>
      <View style={{flex:1, backgroundColor:'#fff',paddingTop:10}}>
      <DrawerItemList {...props}/>
      </View>
      </ScrollView>

   <View style= {{padding:20, borderTopWidth:1 ,borderTopColor:'#cco'}}>
   <TouchableOpacity onPress={() =>{}} style={{paddingVertical:15}}>
        <View style= {{flexDirection: "row", alignItems:'center'}}>

        <Text style={{
          fontSize:15,
          fontFamily:'DMSans-Medium',
          marginLeft: 5,
        }}>
        SHARE
        </Text>
        </View>



  </TouchableOpacity>
<CustomButton label={'logout'}  onPress={() => {logout()}} />
   </View>
  </View>
  );
};

export default CustomDrawer;
