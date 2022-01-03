import React from 'react';
import {Column, WeatherText} from '../../../components';
import FastImage from 'react-native-fast-image';
import {findMyWeatherPng} from '../../../utils/findWeatherPng';
import {returnOnlyDay, returnOnlyDayAndMonth} from '../../../utils/formatDate';
import {Daily} from '../../../models/details';
import {Colors} from '../../../resources';

type DailyProps = {
  day: Daily;
};

function DailyDetail({day}: DailyProps) {
  const image = findMyWeatherPng(day.weather[0].icon);

  return (
    <Column center>
      <FastImage
        source={{uri: image}}
        resizeMode={'contain'}
        style={{
          height: 40,
          width: 40,
          alignItems: 'center',
        }}
      />
      <WeatherText
        size={16}
        my={2}
        medium
        textAlign={'center'}
        color={Colors.white}>
        {returnOnlyDay(day.dt)}
      </WeatherText>
      <WeatherText textAlign={'center'} my={2} color={Colors.white}>
        {returnOnlyDayAndMonth(day.dt)}
      </WeatherText>
      <WeatherText textAlign={'center'} my={2} color={Colors.white}>
        {day.temp.day.toFixed(0)}º
      </WeatherText>
    </Column>
  );
}

export default DailyDetail;
