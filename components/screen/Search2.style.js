import {StyleSheet} from "react-native";
import { COLORS, SIZES, SIZESS } from "../../constants";

const styles = StyleSheet.create({
  loadingContainer:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  alignContent:"center"
  },
  container:{
    alignItems:"center",
    paddingTop: SIZESS.xxLarge,
    paddingLeft: SIZESS.small/2
  },
  separator:{
    height:16
  },
   searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop:7,
    height: 40,
    marginLeft:45
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {

    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary
  },
  searchBtnImage: {
    width: "100%",
    height: "100%",
    tintColor: COLORS.white,
  },
  searchIcon:{
    marginHorizontal:10,
    color:COLORS.gray,
    borderRadius:SIZES.small
  },
  searchImage:
  {
    resizeMode:"contain",
    width:SIZESS.width -80,
    height:SIZESS.height -300,
    opacity:0.9
  }
})

export default styles;
