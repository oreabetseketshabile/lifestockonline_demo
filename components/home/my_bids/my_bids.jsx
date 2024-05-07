import React from 'react'
import {View, Text,SafeAreaView,TextInput, TouchableOpacity,Image, FlatList,ScrollView } from 'react-native'




const my_bids = () => {

  return (

  <View style={styles.container1}>
         <Image

    source={icons.search}
    resizeMode="contain"
    style={styles.searchBtnImage}

  />
        <Text style={styles.welcomeMessage}>Time Auction</Text>
        <Text>Online Lifestock Auction</Text>
        //from database//
        <Text># Of lots</Text>

        <View>

<TouchableOpacity style = {styles.registerbtn} onPress = {handleClick} >
 <Text>REGISTER TO BID</Text>
</TouchableOpacity>


</View>


  <ScrollView showsVerticalScrollIndicator={false}>

//there should be a scrollview, //
<TouchableOpacity style = {styles.lotsbtn} onPress = {handleClick} >
<View>
 <Image

    source={icons.search}
    resizeMode="contain"
    style={styles.searchBtnImage}

  />
  //from database//

  <Text>lot number</Text>
  <Text>description</Text>
  <Text>Price</Text>
</View>
</TouchableOpacity>

</ScrollView>
    </View>
  );
};


export default my_bids;
