import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT, SIZES, SIZESS} from "../../constants";


const styles = StyleSheet.create({
  Title:{
    marginTop: SIZESS.large,
    marginHorizontal:SIZESS.large,
    fontSize: SIZES.small,
     
    fontFamily: FONT.bold,
    color: COLORS.black,
  },
   input: {
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'gray',
    
    marginBottom: -4,
     flexDirection:"row",
    padding: 10,
  },
    descriptionWrapper:{
    marginTop: SIZESS.large+2,
    marginHorizontal:SIZESS.large
  },
});
  export default styles;