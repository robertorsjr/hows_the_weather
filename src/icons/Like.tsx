import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

const Like = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    stroke={Colors.purple}
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}>
    <Path d="M15.668 8.626 24 9.785l-6.065 5.874L19.415 24l-7.416-3.997L4.583 24l1.481-8.341L0 9.785l8.331-1.159L11.999 1l3.669 7.626zm-6.67.925-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
  </Svg>
);

export default Like;
