import styled from 'styled-components/native';

type SeparatorProps = {
  y?: number;
  x?: number;
};

const Separator = styled.View<SeparatorProps>`
  height: ${({y}) => y || 10}px;
  width: ${({x}) => x || 10}px;
`;

export default Separator;
