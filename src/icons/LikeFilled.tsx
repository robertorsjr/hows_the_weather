import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LikeFilled = (props: SvgProps) => (
  <Svg width={24} height={24} fill={'red'} {...props}>
    <Path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z" />
  </Svg>
);

export default LikeFilled;
