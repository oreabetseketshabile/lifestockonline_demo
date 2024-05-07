import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%", // Set width to fill the available space
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.gray2,
    marginBottom: SIZES.medium, // Add margin bottom for spacing between containers
    paddingHorizontal: SIZES.medium, // Add horizontal padding for spacing
    paddingVertical: SIZES.small, // Add vertical padding for spacing
    flexDirection: "row", // Change flexDirection to 'row' for horizontal layout
  },
  imageContainer: {
    width: 250, // Adjust width based on your design
    height: 150, // Adjust height based on your design
    borderRadius: SIZES.xSmall,
    overflow: "hidden",
    marginRight: SIZES.medium, // Add margin right for spacing between images
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    flex: 1, // Add flex: 1 to allow details to take remaining space
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.small,
    color: COLORS.black,
    marginBottom: SIZES.medium, // Add margin bottom for spacing between text
  },
  supplier: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.black,
    marginBottom: SIZES.small, // Add margin bottom for spacing between text
  },
  prices: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    marginBottom: SIZES.small, // Add margin bottom for spacing between text
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
