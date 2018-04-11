import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  borda: 5,
  basePadding: 20,
  baseMargin: 10,
  basaMarginLoading: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
