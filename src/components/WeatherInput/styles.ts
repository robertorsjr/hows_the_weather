import styled from 'styled-components/native';
import {Colors, Fonts} from '../../resources';

type InputContainerProps = {
  isFocused: boolean;
};

export const InputContainer = styled.View<InputContainerProps>`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({isFocused}) => (isFocused ? Colors.purple : Colors.black)};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  width: 290px;
`;

export const Input = styled.TextInput`
  font-family: ${Fonts.robotoMedium};
  font-size: 16px;
  color: ${Colors.black};
  flex: 1;
  padding: 15px;
`;
