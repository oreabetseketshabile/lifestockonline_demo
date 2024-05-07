import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension}) => {
 const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the login screen
    navigation.navigate('Search2');
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resize="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
