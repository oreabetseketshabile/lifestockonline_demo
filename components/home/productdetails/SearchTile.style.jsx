import { StyleSheet } from "react-native"
import { SIZES,COLORS,SHADOWS } from "../../../constants";
const styles = StyleSheet.create({
  container:{
  flex:1,
  justifyContent:"space-between",
  alignItem:"center",
  marginBottom:"row",
  padding:SIZES.medium,
  borderRadius:SIZES.small,
  backgroundColor:"#FFF",
  ...SHADOWS.medium,
  shadowColor:COLORS.lightWhite
  },
  image:{
    width:70,
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    justifyContent:"center",
    alignContent:"center"
  },
  productImg:{
    width:"100%",
    height:65,
    borderRadius:SIZES.small,
    resizeMode:"cover"
  },
  textContainer:{
    flex:1,
    marginHorizontal:SIZES.medium
  },
  productTitle:{
    fontSize:SIZES.medium,
    fontFamily:"bold",
    color:COLORS.primary
  },
  supplier:{
    fontSize:SIZES.medium,
    fontFamily:"bold",
    color:COLORS.primary,marginTop:3

  }

})

export default styles;
