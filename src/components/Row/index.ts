import styled from 'styled-components/native';

type RowProps = {
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-evenly'
    | 'space-around'
    | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  height?: number;
};

const Row = styled.View<RowProps>`
  width: 100%;
  flex-direction: row;
  align-items: ${({alignItems}) => alignItems || 'center'};
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  padding: ${({top = 0, bottom = 0, left = 0, right = 0}) =>
    `${top}px ${right}px ${bottom}px ${left}px`};
  height: ${({height}) => (height ? `${height}px` : 'auto')};
`;

export default Row;
