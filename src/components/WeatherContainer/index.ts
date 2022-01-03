import styled from 'styled-components/native';
import {Colors} from '../../resources';

type Props = {
  isDetail?: boolean;
};

const WeatherContainer = styled.View<Props>`
  flex: 1;
  padding-bottom: 15px;
  background-color: ${({isDetail}) =>
    isDetail ? Colors.purple : Colors.background};
`;

export default WeatherContainer;
