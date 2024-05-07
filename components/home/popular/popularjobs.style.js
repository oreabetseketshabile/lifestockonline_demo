import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
   
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
     flex: 1,
    alignItems:"center"
  },
 div:{
alignItems:'center',
backgroundColor:'#333366',
justifyContent: "space-between",
  },

section:{
  backgroundColor:'#008080',
  alignItems:'center',

},


setColorBlack:{
color:'#000000'
},

setColorWhite:{
color:'#ffffff',
},

sectionA:{
backgroundColor:'#336699',
},

button:{
  alignItems:'center',
  backgroundColor:'#000080',

}
,

});

export default styles;
