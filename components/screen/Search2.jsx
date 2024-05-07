import React, {useState} from 'react'
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Touchable

} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './Search2.style';
import axios from 'axios';

import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto, Feather} from '@expo/vector-icons'
import { COLORS,SIZES,SIZESS,icons } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchTile from '../home/productdetails/SearchTile';


const Search2 = () => {
const [searchKey, setSearchKey] = useState('');
const [searchResults,setSearchResults]=useState({});
console.log(searchResults);
const handleSearch= async() =>{
  try{

  const response=await axios.get(`https://calm-brook-89036-f5f31d27bf9f.herokuapp.com/placeBid/placeBid/search/${searchKey}`)
  setSearchResults(response.data);
  console.log('===================================');
   console.log(response.data);
   console.log('===================================');


  }
  catch(error)
  {
    console.log("Failed to get retrieve ",error);

  }
}

  return (
    <SafeAreaView>
    <View>

    <View style={styles.searchContainer}>
    <TouchableOpacity>
      <Ionicons
        name="camera-outline"
        size={SIZES.xLarge}
        style={styles.searchIcon}
      />
    </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder="what are you looking for"
        />
      </View>
<View>
  <TouchableOpacity style = {styles.searchBtn} onPress={()=>handleSearch()} >
    <Feather name="search" sizes={24} color={COLORS.lightWhite}/>

  </TouchableOpacity>
</View>
  </View>

    </View>
    {searchResults.length === 0 ?(
      <View style={{flex: 1 }}>
      <Image
      source={require('../../assets/images/search_image.jpg')}
      style={styles.searchImage}

      />
      </View>
    ):(
      <FlatList
      data={searchResults}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=><SearchTile item={item}/>}
      style={{marginHorizontal:12}}

      />
    )
    }
    </SafeAreaView>
  );
}

export default Search2
