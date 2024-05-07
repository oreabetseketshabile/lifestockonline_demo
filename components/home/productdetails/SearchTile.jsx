import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './SearchTile.style'
import { useNavigation } from '@react-navigation/native'

const SearchTile = ({item}) => {
  const navigation=useNavigation();
  return (
    <View>
     <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetails',{item})}>
     <View style={styles.image}>
     <Image
     source={require('../../../assets/images/bull.png')}
      style={styles.productImg}
     />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.supplier}>{item.description}</Text>
      <Text style={styles.supplier}>P {item.startingPrice}</Text>

      </View>


     </TouchableOpacity>
    </View>
  )
}

export default SearchTile

