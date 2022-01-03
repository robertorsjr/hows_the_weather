import React, {useEffect, useState} from 'react';
import {
  Column,
  ConfirmationModal,
  DefaultPressable,
  EmptyView,
  GoBackButton,
  Loading,
  Row,
  Separator,
  WeatherContainer,
  WeatherImage,
  WeatherText,
} from '../../components';
import {findMyWeatherPng} from '../../utils/findWeatherPng';
import {ArrowUp, Trash} from '../../icons';
import {Colors} from '../../resources';
import {returnOnlyDayAndMonth} from '../../utils/formatDate';
import DailyDetail from './DailyDetail';
import {StatusBar} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {removeCity} from '../../store/ducks/cities';
import {useNavigation} from '@react-navigation/native';
import {requestFindLastWeatherDays} from '../../store/ducks/lastWeatherDays';
import {WeatherDetails} from '../../models/details';

type DetailProps = {
  route: {
    params: {
      lat: number;
      lon: number;
      name: string;
      id: number;
    };
  };
};

type SelectorProps = {
  loading: boolean;
  error: boolean;
  data: WeatherDetails;
};

function WeatherDetail({route}: DetailProps) {
  const [isDelete, setDelete] = useState<boolean>(false);
  const {lat, lon, name, id} = route.params;

  const navigation = useNavigation<any>();
  const {
    data: cityDetail,
    loading,
    error,
  }: SelectorProps = useAppSelector(
    ({findLastWeatherDaysState}) => findLastWeatherDaysState,
  );

  const {data: actualLocation} = useAppSelector(
    ({actualLocationForecastState}) => actualLocationForecastState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestFindLastWeatherDays(lat, lon));
  }, [dispatch, lat, lon]);

  if (loading) {
    return <Loading />;
  }

  function handleRemoveItem() {
    dispatch(removeCity(id));
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
        {actualLocation.name === name ? (
          <EmptyView />
        ) : (
          <DefaultPressable onPress={() => setDelete(true)}>
            <Trash />
          </DefaultPressable>
        )}
      </Row>
      <Separator y={30} />
      {!error && cityDetail ? (
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
      <ConfirmationModal
        showModal={isDelete}
        toggleModal={setDelete}
        cityName={name}
        onAccept={handleRemoveItem}
      />
    </WeatherContainer>
  );
}

export default WeatherDetail;
