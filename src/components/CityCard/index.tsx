import React, {useEffect, useState} from 'react';
import {Row, WeatherText} from '../index';
import {CityCardContainer} from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {addCity} from '../../store/ducks/cities';
import {Colors, t} from '../../resources';
import {GeoResponse} from '../../models/geo';

type CityCardProps = {
  item: GeoResponse;
  setSearch: (value: boolean) => void;
};

function CityCard({item, setSearch}: CityCardProps) {
  const [hasCity, setHasCity] = useState<boolean>(false);
  const {citiesForecast} = useAppSelector(
    ({citiesForecastState}) => citiesForecastState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    function verifyCity() {
      const verifyHasCity = citiesForecast.find(
        (el: any) => el.name === item.name,
      );
      setHasCity(!!verifyHasCity);
    }
    verifyCity();
  }, [citiesForecast, item.name]);

  function handleAddCity() {
    dispatch(addCity(item));
    setSearch(false);
  }

  if (item) {
    return (
      <CityCardContainer onPress={() => !hasCity && handleAddCity()}>
        <WeatherText size={22} medium>
          {item.name}
        </WeatherText>
        <WeatherText size={13} italic>
          {item.sys.country}
        </WeatherText>
        <Row justifyContent={'flex-end'}>
          {hasCity ? (
            <WeatherText color={Colors.danger} size={18}>
              {t('alreadyInList')}
            </WeatherText>
          ) : (
            <WeatherText color={Colors.purple} size={18}>
              {t('touchToAdd')}
            </WeatherText>
          )}
        </Row>
      </CityCardContainer>
    );
  }

  return null;
}

export default CityCard;
