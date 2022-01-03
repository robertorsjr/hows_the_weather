import React from 'react';
import {Column, WeatherImage, WeatherText} from '../../../components';
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
    <Column alignItems={'center'}>
      <WeatherImage
        source={{uri: image}}
        resizeMode={'contain'}
        height={40}
        width={40}
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
