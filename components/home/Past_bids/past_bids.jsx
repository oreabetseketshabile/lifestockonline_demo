import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { ScrollView, SafeAreaView, View, TouchableOpacity } from "react-native";
//import { AppRegistry } from "react-native";

import {COLORS,icons,images,SIZE, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import 'react-native-gesture-handler';
//import {createDrawerNavigation} from '@react-navigation/drawer';

  const Past_bids= () => {
const router = useRouter();
const [searchTerm, setSearchTerm] = useState("");
    return(


  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
   <View style={{paddingHorizontal:25}}>
      <Text style={{fontFamily:'DMSans-Bold',
      fontSize:35,
      textAlign:'center',
      fontWeight:'600',
      color:'#333',
      marginBottom:30}
      }>
      My Bids History
      </Text>

    </View>


   <ScrollView showsHorizontalScrollIndicator={true}>
   <View
    style={{
      flex:1,
      padding: SIZES.medium
    }}
 >
<Welcome
searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
handleClick={()=>{
  if(searchTerm){
  router.push(`/search/${searchTerm}`)
}
}}

/>

</View>
</ScrollView>
</SafeAreaView>
)

}



export default Past_bids;
