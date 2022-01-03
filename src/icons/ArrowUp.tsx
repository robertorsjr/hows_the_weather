import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

type ArrowProps = SvgProps & {
  isDown?: boolean;
};

const ArrowUp = ({isDown, ...props}: ArrowProps) => (
  <Svg
    width={24}
    height={10}
    fill={isDown ? Colors.green : Colors.danger}
    style={{
      transform: [{rotate: isDown ? '180deg' : '0deg'}],
    }}
    {...props}>
    <Path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472H2.296c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />
  </Svg>
);

export default ArrowUp;
