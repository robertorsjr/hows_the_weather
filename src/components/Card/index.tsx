import React, {ReactNode} from 'react';
import {Container} from './styles';

type CardProps = {
  children: ReactNode;
};

function Card({children}: CardProps) {
  return <Container>{children}</Container>;
}

export default Card;
