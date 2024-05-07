import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT, SIZES, SIZESS} from "../../constants";


const styles = StyleSheet.create({
  descriptionWrapper:{
    marginTop: SIZESS.large+2,
    marginHorizontal:SIZESS.large,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.black,
    alignItems:'center',
  },
});
  export default styles;
