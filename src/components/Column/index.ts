import styled from 'styled-components/native';

type ColumnViewProps = {
  padding?: number;
  alignItems?: any;
};

const Column = styled.View<ColumnViewProps>`
  padding: ${({padding}) => (padding ? `${padding}px` : 0)};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;

export default Column;
