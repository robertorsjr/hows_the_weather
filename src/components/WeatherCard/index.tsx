import React from 'react';
import {
  Column,
  DefaultPressable,
  Row,
  WeatherLikeButton,
  WeatherText,
} from '../index';
import {ArrowUp} from '../../icons';
import {Colors, t} from '../../resources';
import Card from '../Card';
import {GeoResponse} from '../../models/geo';

type WeatherCardProps = {
  item?: GeoResponse | null;
  isLocal?: boolean;
  handlePress?: () => void;
};

function WeatherCard({item, isLocal, handlePress}: WeatherCardProps) {
  if (!item) {
    return null;
  }

  return (
    <DefaultPressable isWide onPress={handlePress && handlePress}>
      <Card item={item}>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <WeatherText bold size={30} color={Colors.purple}>
            {item.main.temp.toFixed(0)}º
          </WeatherText>
          <Column alignItems={'center'}>
            <Row>
              <WeatherText>{item.main.temp_min.toFixed(0)}º</WeatherText>
              <ArrowUp isDown />
            </Row>
            <Row>
              <WeatherText>{item.main.temp_max.toFixed(0)}º</WeatherText>
              <ArrowUp />
            </Row>
          </Column>
          <Column alignItems={'flex-end'}>
            <WeatherText medium size={20}>
              {item.name}
            </WeatherText>
            <WeatherText textAlign={'right'}>{item.sys.country}</WeatherText>
          </Column>
        </Row>
        <WeatherText my={10} size={15} color={Colors.purple}>
          {item.weather[0].description}
        </WeatherText>
        <Row justifyContent={'flex-end'} alignItems={'center'} bottom={3}>
          {isLocal ? (
            <WeatherText>{t('yourLocation')}</WeatherText>
          ) : (
            <WeatherLikeButton item={item} />
          )}
        </Row>
      </Card>
    </DefaultPressable>
  );
}

export default WeatherCard;
