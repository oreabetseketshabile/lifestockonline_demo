import createSizeValue from './createSizeValue';
import { Dimensions } from 'react-native';
const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  green: "#00FF00",
  blue: "#0099FF",
  lightblue: "#33FFFF"
};

const SIZESS = {
   width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  xSmall: createSizeValue('10px'),
  small: createSizeValue('12px'),
  medium: createSizeValue('16px'),
  large: createSizeValue('20px'),
  xLarge: createSizeValue('24px'),
  xxLarge: createSizeValue('32px'),
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS,SIZESS};
