import {StyleSheet} from "react-native";
import { COLORS, SIZES, SIZESS } from "../../../constants";

const styles = StyleSheet.create({
container:{
  flex:3,
  backgroundColor:COLORS.lightWhite

},
wrapper:{
  flex:1,
  backgroundColor:COLORS.lightWhite
},
upperRow:{
  width:SIZESS.width-50,
  marginHorizontal:SIZES.large,
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"center",
  position:"absolute",
borderStartColor:COLORS.primary,
  borderRadius:SIZES.large,
  top:SIZES.large,
  zIndex:999

},
heading:{

  fontSize: SIZESS.large,
  color:COLORS.black,
  marginLeft:45
}

})

export default styles;
