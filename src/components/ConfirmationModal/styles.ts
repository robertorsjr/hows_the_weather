import styled from 'styled-components/native';

import {Colors} from '../../resources';

const Wrapper = styled.View``;

const ModalView = styled.View`
  background-color: ${Colors.background};
  border-radius: 8px;
  padding: 20px;
`;

const ModalButton = styled.Pressable`
  background-color: ${Colors.purple};
  padding: 10px 20px;
  border-radius: 8px;
`;

export {Wrapper, ModalView, ModalButton};
