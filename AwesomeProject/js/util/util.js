
import React from 'react';
import {PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

let Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),

  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  scale: Dimensions.get('window').width/375.0
}

export default Util;
