import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

type ArrowLeftProps = SvgProps & {
  ml?: number;
  color?: string;
  darkScreen?: boolean;
};

function ArrowLeft({color, ml, darkScreen, ...props}: ArrowLeftProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props} style={{marginLeft: ml}}>
      <Path
        d="m15 18-6-6 6-6"
        stroke={color ? color : darkScreen ? Colors.white : Colors.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowLeft;
