import React from 'react';
import {Like, LikeFilled} from '../../icons';
import {DefaultPressable} from '../index';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {likeCity} from '../../store/ducks/cities';

type WeatherLikeButtonProps = {
  item: any;
};

function WeatherLikeButton({item}: WeatherLikeButtonProps) {
  const {storedCities} = useAppSelector(({citiesState}) => citiesState);

  const dispatch = useAppDispatch();

  const city = storedCities.find((el: any) => el.id === item.id);

  return (
    <DefaultPressable onPress={() => dispatch(likeCity(city, !city.like))}>
      {city.like ? <LikeFilled /> : <Like />}
    </DefaultPressable>
  );
}

export default WeatherLikeButton;
