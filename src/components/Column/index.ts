import styled from 'styled-components/native';

type ColumnViewProps = {
  padding?: number;
  center?: boolean;
};

const Column = styled.View<ColumnViewProps>`
  padding: ${({padding}) => (padding ? `${padding}px` : 0)};
  align-items: ${({center}) => center && 'center'};
`;

export default Column;
