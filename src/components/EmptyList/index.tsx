import React from 'react';
import {Separator, WeatherText} from '../index';
import {Container} from './styles';
import {t} from '../../resources';

function EmptyList() {
  return (
    <Container>
      <WeatherText medium size={18} textAlign={'center'}>
        {t('emptyListOne')}
      </WeatherText>
      <Separator y={10} />
      <WeatherText textAlign={'center'} color={'gray'}>
        {t('emptyListTwo')}
      </WeatherText>
    </Container>
  );
}

export default EmptyList;
