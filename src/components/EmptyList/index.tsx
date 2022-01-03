import React from 'react';
import {Separator, WeatherText} from '../index';
import {Container} from './styles';
import {Colors, t} from '../../resources';

type EmptyProps = {
  isSearch?: boolean;
};

function EmptyList({isSearch}: EmptyProps) {
  if (isSearch) {
    return (
      <Container>
        <WeatherText size={18} color={Colors.purple} textAlign={'center'}>
          {t('emptySearchMessage')}
        </WeatherText>
      </Container>
    );
  }

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
