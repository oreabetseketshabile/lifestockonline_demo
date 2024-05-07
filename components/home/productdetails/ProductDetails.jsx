import { StyleSheet, Text, View ,TouchableOpacity,Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import styles from './Productdetails.style'
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { COLORS,SIZESS,icons } from '../../../constants'
import { ScrollView, SafeAreaView } from 'react-native';
import { Stack} from 'expo-router';
import { useRoute } from '@react-navigation/native'
import { ScreenHeaderBtn } from '../../../components';
import { Line } from '../../../styles/search';
import usePaymentIntent from '../../../hook/usePaymentIntent';
import CustomButton from '../../screen/CustomButton';


const ProductDetails = ({navigation,amount}) => {
  const route=useRoute();
  const {item}= route.params;
  console.log(item);
  const [count, setCount] = useState(1)



  const increment = ()=> {
    setCount(count + 1)
  }

  const decrement = ()=> {
    if (count > 1){

    setCount(count - 1)
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
    <SafeAreaView>

<View style={styles.details}>
      <Stack.Screen
        options={{
          headerStyle: { },
          headerShadowVisible: false,

          headerRight: () => <ScreenHeaderBtn iconUrl={icons.heart} dimension="60%" />,

          headerTitle: ""
          }}/>


        <View style={{ flex: 1 }}>
      <Image
        source={require('../../../assets/images/lifestock.jpg')}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.headerTitle2}>{item.title}</Text>
          <View>
             <Text style={styles.headerTitle}>Start Price:</Text>
             <Text style={styles.headerTitle}>P {item.startingPrice}</Text>
          </View>
        </View>
             <View style={{ flex: 1, padding: 9 }}>
      {/* <Text style={{ textAlign: 'left', fontSize: 18, marginBottom: 10 }}>Place Bid</Text> */}
             <Text style={styles.headerTitleBid}>Your Bid Price</Text>
      {/* Input Fields For Bidder*/}

          <TextInput
          style={styles.input}
          placeholder="BWP"
          />
      
        </View>


        <View style={styles.descriptionWrapper}>

         <Text style={styles.headerTitle}>Current Top Bidder</Text>
         <Text style={styles.headerTitle3}>Current Highest Bid: P{item.currentHighestBid.amount} by {item.currentHighestBid.bidder}</Text>
<Line/>
        <Text style={styles.headerTitle}>Start Time </Text>
        <Text style={styles.headerTitle3}>{item.startTime}</Text>
<Line/>
        <Text style={styles.headerTitle}>End Time </Text>
        <Text style={styles.headerTitle3}>{item.endTime}</Text>
<Line/>
        <Text style={styles.headerTitle}>Description</Text>
         <Text style={styles.descText}>
         {item.description}
         </Text>
<Line/>
        </View>


            <View style={styles.cartRow}>
          <TouchableOpacity onPress={()=> navigation.navigate('PaymentInfo')} style={styles.cartBtn}>
            <Text style= {styles.cartTitle}>Place BID</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('DoneSubmitting')} style={styles.addCart}>
             <Fontisto name="shopping-bag"
             size={20}
             color={COLORS.lightWhite}/>
          </TouchableOpacity>


           </View>
      </View>
    </View>


</View>

</SafeAreaView>
</ScrollView>
  )
}




export default ProductDetails


