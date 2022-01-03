import styled from 'styled-components/native';
import {Colors} from '../../resources';

type ButtonsProps = {
  selected: boolean;
};

export const BorderFlagButton = styled.Pressable<ButtonsProps>`
  border-width: ${({selected}) => (selected ? '3px' : 0)};
  border-color: ${Colors.purple};
  border-radius: 3px;
`;
