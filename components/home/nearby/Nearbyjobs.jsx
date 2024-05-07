import React from 'react'
import {View, Text, TouchableOpacity,FlatList, ImageBackground,Button } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './nearbyjobs.style'
import { COLORS,SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { Line } from '../../../styles/search';
import {Ionicons,Fontisto} from "@expo/vector-icons";

const Nearbyjobs = () => {
  const navigation = useNavigation();
  const products = [1, 2, 3, 4];

  return (

    <View>
    <Line/>
        <View style={styles.container3}>
        <View style={styles.Title2}>
            <Text style={styles.Title}>SUPPORTED DEVICES</Text>

            <Ionicons name="logo-windows" size={50} color={COLORS.black} />
            <Text style={styles.headerTitle}>Windows</Text>

            <Fontisto name="apple" size={50} color={COLORS.black} />
            <Text style={styles.headerTitle}>MAC</Text>

             <Fontisto name="android" size={50} color={COLORS.green} />
             <Text style={styles.headerTitle}>Android</Text>

          </View>

        </View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Public Auctions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PrivateAuctions')}>
          <Text style={styles.HeaderBtn}>Show all </Text>
        </TouchableOpacity>
      </View>
    <View style={{marginTop: SIZES.medium}}>
    <FlatList
      data={products}
      renderItem={({ item }) => <NearbyJobCard/>}
      vertical
      contentContainerStyle={{columnGap:SIZES.medium}}
    />


    <View >

     <TouchableOpacity onPress={() => navigation.navigate('PrivateAuctions')}>



        </TouchableOpacity>
    </View>

    </View>


<View style={styles.div}>


<Text style={styles.setColorWhite2}> (c)2009-2024,LifestockAuction.com | User Agreement | Privacy | <Ionicons name="logo-windows" size={15} color={COLORS.black} /></Text>
 </View>

    </View>
  </View>

  )
}



export default Nearbyjobs;
