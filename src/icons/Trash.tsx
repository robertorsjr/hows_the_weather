import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Trash = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={'#fff'}
    style={{marginRight: 20}}
    {...props}>
    <Path d="M3 6v18h18V6H3zm5 14a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm5 0a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm5 0a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm4-18v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22z" />
  </Svg>
);

export default Trash;
