import React from 'react';
import {Separator, WeatherText} from '../index';
import {Container} from './styles';

function EmptyList() {
  return (
    <Container>
      <WeatherText medium size={18} textAlign={'center'}>
        Parece que você ainda não adicionou uma cidade
      </WeatherText>
      <Separator y={10} />
      <WeatherText textAlign={'center'} color={'gray'}>
        Tente adicionar uma cidade usando o botão de busca
      </WeatherText>
    </Container>
  );
}

export default EmptyList;
