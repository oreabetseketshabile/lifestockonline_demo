
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import styles from './nearbyjobcard.style';
import { COLORS, SHADOWS, SIZES } from "../../../../constants";
import {checkImageURL} from '../../../../utils';
const NearbyJobCard = () => {
  return(
   <View>
 
    <TouchableOpacity onPress={() => {}}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      source={require('../../../../assets/images/bull.png')}
       style={styles.image}
      />

        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.prices}>P8000</Text>

        </View>
        <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle" size={35} color={COLORS.primary}/>

        </TouchableOpacity>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default NearbyJobCard
