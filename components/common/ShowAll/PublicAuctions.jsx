import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './PrivateAuctions.style'
import { Ionicons } from '@expo/vector-icons'
import {COLORS} from "../../../constants"
import ProductList from './ProductList'

const PublicAuctions = ({navigation}) => {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-circle"
            size={30}
            color={COLORS.black}
            />
          </TouchableOpacity>

          <Text style= {styles.heading}>All Public Auctions</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default PublicAuctions;

