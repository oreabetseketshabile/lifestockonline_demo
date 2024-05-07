import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons}  from '../../../constants'
import { checkImageURL } from '../../../utils'


const Company = (companyLogo, jobTitle,companyName, location) => {
  return (
    <View style={styles.container}>
     <View style={styles.logoBox}>
      <Image
      source={{
        url: checkImageURL(companyLogo)
        ?companyLogo
        : "http://t4.ftcdn.net/jpg/05/05/61/73/360_F_50617309_HH1CX7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
      }}
        style={styles.logoImage}
      />
     </View>

      <View style= {styles.jobTitleBox}>
      <Text style= {styles.jobTitle}>{companyName}</Text>
      </View>

      <View style={companyInfoBox}>
      <Text style={styles.companyName}>{companyName} </Text>

        <View style={styles.locationBox}>
        <Image
        source={icons.location}
        resizeMode="contain"
        style={styles.locationImage}
         />
        <Text style={styles.locationName}>{Location}</Text>
        </View>
      </View>

    </View>
  )
}

export default Company