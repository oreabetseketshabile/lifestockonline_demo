import {useState} from 'react'
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image

} from 'react-native';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import {SIZES, icons,COLORS} from '../../../constants';

const jobTypes=["Available Auctions"];
const Welcome = (searchTerm,setSearchTerm, handleClick) => {
const router= useRouter();
const [activeJobType,setActiveJobType]=useState('Available Auctions')

  return (
    <View>

  <View style= {styles.tabsContainer}>
  <FlatList
  data={jobTypes}
  renderItem={({item})=>(

<TouchableOpacity
style={styles.tab(activeJobType,item)}
onPress={()=>{
  setActiveJobType(item);
  router.push('/search/${item}')
}}
>
  <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
</TouchableOpacity>

  )}
  keyExtractor={item => item}
  contentContainerStyle={{columnGap:SIZES.small}}
  horizontal
    />

  </View>
    </View>
  )
}

export default Welcome
