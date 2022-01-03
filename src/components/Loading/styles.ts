import styled from 'styled-components/native';
import {Colors} from '../../resources';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
`;

const AbsoluteContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export {LoadingContainer, AbsoluteContainer};
