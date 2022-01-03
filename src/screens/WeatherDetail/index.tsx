/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {
  Column,
  DefaultPressable,
  GoBackButton,
  Loading,
  Row,
  Separator,
  WeatherContainer,
  WeatherImage,
  WeatherText,
} from '../../components';
import {findLastWeatherDays} from '../../services/findWeather';
import {WeatherDetails} from '../../models/details';
import {findMyWeatherPng} from '../../utils/findWeatherPng';
import {ArrowUp, Trash} from '../../icons';
import {Colors} from '../../resources';
import {returnOnlyDayAndMonth} from '../../utils/formatDate';
import DailyDetail from './DailyDetail';
import {StatusBar} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {removeCity} from '../../store/ducks/cities';
import {useNavigation} from '@react-navigation/native';

type DetailProps = {
  route: {
    params: {
      lat: number;
      lon: number;
      name: string;
    };
  };
};

function WeatherDetail({route}: DetailProps) {
  const {lat, lon, name} = route.params;
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [cityDetail, setCityDetail] = useState<WeatherDetails>();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getDetail() {
      try {
        setLoading(true);
        const {data} = await findLastWeatherDays(lat, lon);
        setCityDetail(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getDetail();
  }, [lat, lon]);

  if (isLoading) {
    return <Loading />;
  }

  function handleRemoveItem() {
    dispatch(removeCity(cityDetail));
    navigation.navigate('Home');
  }

  return (
    <WeatherContainer isDetail>
      <StatusBar barStyle={'light-content'} />
      <Separator y={30} />
      <Row justifyContent={'space-between'} alignItems={'center'}>
        <GoBackButton />
        <WeatherText size={20} medium textAlign={'center'} color={Colors.white}>
          {name}
        </WeatherText>
        <DefaultPressable onPress={handleRemoveItem}>
          <Trash />
        </DefaultPressable>
      </Row>
      <Separator y={30} />
      {!isError && cityDetail ? (
        <Column center>
          <WeatherImage
            source={{
              uri: findMyWeatherPng(cityDetail.current.weather[0].icon),
            }}
            height={100}
            width={100}
            resizeMode={'contain'}
          />
          <Row>
            <WeatherText size={20} color={Colors.white}>
              Hoje
            </WeatherText>
            <Separator x={10} />
            <WeatherText size={26} color={Colors.white}>
              {cityDetail.current.temp.toFixed(0)}º
            </WeatherText>
          </Row>
          <Separator y={5} />
          <WeatherText textAlign={'center'} my={2} color={Colors.white}>
            {returnOnlyDayAndMonth(cityDetail.current.dt)}
          </WeatherText>
          <Row>
            <WeatherText my={10} size={17} color={Colors.white}>
              {cityDetail.current.weather[0].description}
            </WeatherText>
          </Row>
          <Separator y={10} />
          <Row>
            <WeatherText color={Colors.white}>
              {cityDetail.daily[0].temp.min.toFixed(0)}º
            </WeatherText>
            <ArrowUp isDown />
          </Row>
          <Separator y={5} />
          <Row>
            <WeatherText color={Colors.white}>
              {cityDetail.daily[0].temp.max.toFixed(0)}º
            </WeatherText>
            <ArrowUp />
          </Row>
          <Separator y={20} />
          <WeatherText textAlign={'center'} size={16} color={Colors.white}>
            Previsão para os próximos 5 dias
          </WeatherText>
          <Separator y={20} />
          <Row justifyContent={'space-evenly'} style={{width: '100%'}}>
            {cityDetail.daily.slice(1, 6).map(day => (
              <DailyDetail key={day.dt} day={day} />
            ))}
          </Row>
        </Column>
      ) : (
        <WeatherText mx={55} size={20} color={'red'} textAlign={'center'}>
          Ocorreu um erro ao tentar buscar os dados
        </WeatherText>
      )}
    </WeatherContainer>
  );
}

export default WeatherDetail;
