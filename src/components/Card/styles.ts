import styled from 'styled-components/native';
import {Colors} from '../../resources';

const Container = styled.View`
  justify-content: space-between;
  height: 130px;
  background-color: ${Colors.background};
  border-radius: 20px;
  padding: 15px;
  border-width: 1px;
  border-color: ${Colors.purple};

  margin: 0 20px;
`;

export {Container};
