import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

type ImageProps = {
  height: number;
  width: number;
};

const WeatherImage = styled(FastImage)<ImageProps>`
  width: ${({width}) => width && width}px;
  height: ${({height}) => height && height}px;
`;

export default WeatherImage;
