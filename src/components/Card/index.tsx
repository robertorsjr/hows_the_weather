import React, {ReactNode} from 'react';
import {Container, ImageBg} from './styles';
import {findMyWeatherPng} from '../../utils/findWeatherPng';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../hooks/useAppDispatch';

type CardProps = {
  children: ReactNode;
  item: any;
};

function Card({children, item}: CardProps) {
  const {storedCities} = useAppSelector(({citiesState}) => citiesState);

  const city = storedCities.find((el: any) => el.id === item.id);

  return (
    <Container liked={city?.like}>
      <ImageBg
        source={{uri: findMyWeatherPng(item.weather[0].icon)}}
        resizeMode={FastImage.resizeMode.contain}
      />
      {children}
    </Container>
  );
}

export default Card;
