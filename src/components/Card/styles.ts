import styled from 'styled-components/native';
import {Colors} from '../../resources';
import FastImage from 'react-native-fast-image';

type ContainerProps = {
  liked: boolean;
};

const Container = styled.View<ContainerProps>`
  background-color: ${Colors.white};
  border-radius: 15px;
  padding: 15px;
  border-width: ${({liked}) => (liked ? '2px' : 0)};
  border-color: ${Colors.purple};
  box-shadow: 1px 2px 2px #ccc;
  elevation: 3;
  margin: 0 20px;
`;

const ImageBg = styled(FastImage)`
  position: absolute;
  right: 0;
  top: 20px;
  width: 90px;
  height: 90px;
  opacity: 0.8;
`;

export {Container, ImageBg};
