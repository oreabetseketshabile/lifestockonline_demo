import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },

  div:{
alignItems:'center',
backgroundColor:'#336699',
justifyContent: "space-between",
  },

section:{
  backgroundColor:'#336699',
  alignItems:'center',

},


setColorBlack:{
color:'#000000'
},

setColorWhite:{
color:'#ffffff',
},

setColorWhite2:{
color:'#ffffff',
     fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.black,
},
sectionA:{
backgroundColor:'#336699',
},

button:{
  alignItems:'center',
  backgroundColor:'#000080',

},
styleImage:{
  width:1340,
  height:260,
  marginBottom:40

},

   container3: {
    width: 1340,
    height: 260,
    marginEnd: 40,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.gray,
  },
    Title:{
      flexDirection: "row",
      alignItems:'center',
      fontSize: SIZES.xLarge,
      fontFamily: FONT.bold,
      color: COLORS.black,

  },
     Title2:{
      alignItems:'center',
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.black,

  },
   headerTitle:{
       fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.black,
  },
    addbidBtn:{

   bottom:SIZES.xSmall,
    right:SIZES.xSmall,
      alignItems: 'center',

  },

});

export default styles;
