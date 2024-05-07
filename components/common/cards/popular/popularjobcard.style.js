import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { Directions } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    marginEnd: 40,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.gray2,
  },
  imageContainer: {
    flex: 1,
    width: "100%", // Change width to fill the container
    borderRadius: SIZES.small,
    overflow: "hidden",
  },



  image: {
    flex: 1, // Add flex: 1 to fill the container
    width: "100%", // Ensure the image fills the container
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details:{
    padding:SIZES.small

  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.small,
    color:COLORS.gray
  },
  prices:{
    fontFamily:"bold",
    fontSize:SIZES.medium,
  },
  addBtn:{
    position:"absolute",
    bottom:SIZES.xSmall,
    right:SIZES.xSmall

  }

});

export default styles;
