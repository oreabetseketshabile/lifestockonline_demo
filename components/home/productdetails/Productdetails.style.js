import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT, SIZES, SIZESS} from "../../../constants";


const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:COLORS.lightWhite
},
upperRow: {
    marginHorizontal: SIZESS.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZESS.xxLarge,
    width: SIZESS.width,
    zIndex: 999
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: SIZESS.width / 2,
    height: SIZESS.height /2,
    alignSelf: "center"
  },
  details:{
    marginTop:SIZESS.large,
    backgroundColor:COLORS.lightWhite,
    width:SIZESS.width -20,
    borderTopLeftRadius:SIZESS.medium,
    borderTopRightRadius:SIZESS.medium,
  },
  titleRow:{
    marginHorizontal: 20,
    paddingBottom:SIZESS.xxLarge,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZESS.width -44,
    top: 20
  },
  ratingRow:{
    marginBottom:SIZESS.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZESS.width -10,
    top: 5
  },
  customerBid:{
marginBottom:SIZESS.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:SIZESS.width -10,
    top: 5
  },

  headerTitleBid:{
       fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.black,
  },

  headerTitle:{
       fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.black,
  },

  headerTitle2:{
       fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.black,
  },
  headerTitle3:{
       fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.black,
  },

   input: {
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 2,
     flexDirection:"row",
    padding: 10,
  },
   addbidBtn:{
    position:"absolute",
     flexDirection:"row",
    bottom:SIZES.xSmall,
    right:SIZES.xSmall

  },
    customerBidtitle:{
    marginBottom:SIZESS.small,
    alignItems:"center",
    width:SIZESS.width -10,
    top: 5
  },

   rating:{
     flexDirection:"row",
    backgroundColor: COLORS.gray2,
    padding: 2,
    borderRadius: SIZESS.large,
      paddingBottom: SIZESS.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width: SIZESS.width -20
  },

   ratingText:{
   color: COLORS.gray,
   fontFamily:"medium"
  },


  description:{
    fontFamily: "large" ,
    fontSize:SIZESS.large
  },
  descText:{
    fontFamily: "medium" ,
    fontSize:SIZESS.small,
    textAlign:"justify",
    marginBottom: SIZESS.small
  },

  location:{
   flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: COLORS.gray2,
    padding: 5,
    borderRadius: SIZESS.large
  },

   cartRow:{
    paddingBottom: SIZESS.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width: SIZESS.width -20
  },
  cartBtn:{
    width: SIZESS.width *0.8,
    backgroundColor:COLORS.gray,
    padding: SIZESS.small,
    borderRadius: SIZESS.large,
    marginLeft: 5,
   },

   cartTitle:{
        fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.black,
  },

  addCart:{
    width: 37,
    height: 37,
    borderRadius: 50,
    margin:SIZESS.small,
    backgroundColor:COLORS.gray,
    alignItems:"center",
    justifyContent:"center"
   },

  title:{
    fontFamily:"bold",
    fontSize:SIZESS.medium
  },
  price:{
    fontFamily:"semibold",
    fontSize:SIZESS.medium
  },
  priceWrapper:{
    backgroundColor:COLORS.gray,
    borderRadius:SIZESS.xLarge
    }
});
export default styles;
