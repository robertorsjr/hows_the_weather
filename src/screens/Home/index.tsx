import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Loading,
  Header,
  WeatherContainer,
  CityCard,
  Separator,
  WeatherCard,
  EmptyList,
} from '../../components';
import WeatherList from '../../components/WeatherList';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {requestActualLocationForecast} from '../../store/ducks/actualLocationForecast';
import {requestSearchCity} from '../../store/ducks/searchCity';
import {getCitiesForecast} from '../../store/ducks/citiesForecats';
import reactotron from '../../utils/ReactotronConfig';

function Home() {
  const [filter, setFilter] = useState<string>('');
  const [isSearch, setSearch] = useState<boolean>(false);
  const {data: searchData} = useAppSelector(
    ({searchCityState}) => searchCityState,
  );

  const {data: actualLocation, loading} = useAppSelector(
    ({actualLocationForecastState}) => actualLocationForecastState,
  );

  const {citiesForecats} = useAppSelector(
    ({citiesForecatsState}) => citiesForecatsState,
  );

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestActualLocationForecast());
    dispatch(getCitiesForecast());
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(
      () => {
        dispatch(requestSearchCity(filter));
      },
      filter === '' ? 0 : 2000,
    );
    return () => clearTimeout(delayDebounceFn);
  }, [filter]);

  function handleCityPress(location: any) {
    navigation.navigate('WeatherDetail', {
      lat: location.coord.lat,
      lon: location.coord.lon,
      name: location.name,
    });
  }

  if (loading) {
    return <Loading />;
  }

  reactotron.log(citiesForecats);

  return (
    <WeatherContainer>
      <StatusBar barStyle={'dark-content'} />
      <Separator y={20} />
      <Header isSearch={isSearch} setSearch={setSearch} setFilter={setFilter} />
      {isSearch ? (
        <CityCard item={searchData} setSearch={setSearch} />
      ) : (
        <WeatherList
          data={citiesForecats}
          keyExtractor={(item: any, index: number) => String(index)}
          ItemSeparatorComponent={() => <Separator y={10} />}
          ListHeaderComponent={() => (
            <>
              <WeatherCard
                item={actualLocation}
                isLocal
                handlePress={() => handleCityPress(actualLocation)}
              />
              <Separator y={20} />
            </>
          )}
          ListEmptyComponent={() => <EmptyList />}
          renderItem={({item}: any) => (
            <WeatherCard
              item={item}
              handlePress={() => handleCityPress(item)}
            />
          )}
        />
      )}
    </WeatherContainer>
  );
}

export default Home;
