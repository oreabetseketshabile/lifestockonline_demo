import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator,Button,iframe } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
import useFetch from '../../../hook/useFetch';
import { Line } from '../../../styles/search';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
const Popularjobs = () => {
  const navigation = useNavigation();
  const {data,isLoading,error}=useFetch();
  console.log('Data:', data);
  const dummyData = [
    { _id: 1, title: 'Dummy Title 1', description: 'Dummy Description 1', startingPrice: '$100' },
    { _id: 2, title: 'Dummy Title 2', description: 'Dummy Description 2', startingPrice: '$200' },
    { _id: 3, title: 'Dummy Title 3', description: 'Dummy Description 3', startingPrice: '$300' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Private Auctions</Text>

        <TouchableOpacity onPress={() => navigation.navigate('PrivateAuctions')}>
          <Text style={styles.HeaderBtn}>Show all</Text>

        </TouchableOpacity>
      </View>

      <View style={{ marginTop: SIZES.medium }}>
         {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id} // Use item instead of data, and toString() for key
            renderItem={({ item }) => <PopularJobCard item={item} />} // Use item instead of data
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>

<View style={styles.section}>

</View>
</View>
  );
};

export default Popularjobs;
