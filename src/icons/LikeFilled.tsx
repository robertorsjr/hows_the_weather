import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

const LikeFilled = (props: SvgProps) => (
  <Svg width={24} height={24} fill={Colors.purple} {...props}>
    <Path d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" />
  </Svg>
);

export default LikeFilled;
