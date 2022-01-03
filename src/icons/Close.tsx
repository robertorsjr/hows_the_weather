import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

function Close({...props}: SvgProps) {
  return (
    <Svg width={18} height={18} fill="none" {...props}>
      <Path
        d="M17 1 1 17M1 1l16 16"
        stroke={Colors.black}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Close;
