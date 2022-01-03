import styled from 'styled-components/native';
import {PressableProps} from 'react-native';

type Props = PressableProps & {
  isWide?: boolean;
};

const DefaultPressable = styled.Pressable<Props>``;

export default DefaultPressable;
