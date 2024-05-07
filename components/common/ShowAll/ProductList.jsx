import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../../../hook/useFetch';
import styles from './ProductList.style';
import { COLORS, SIZES, SIZESS } from "../../../constants";
import PopularJobCard from '../cards/popular/PopularJobCard';
const ProductList = () => {
  const { data, isLoading, error } = useFetch();


if(isLoading){
  return(
    <View>
      <ActivityIndicator style= {SIZESS.xxlarge}
        color= {COLORS.primary}
      />
    </View>
  );
}

return(
  <View style= {styles.container}>
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (<PopularJobCard item={item}/>)}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={()=> <View style={styles.separator}/>}

    />
  </View>
)
}

export default ProductList

