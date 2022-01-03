import React from 'react';
import {Row, WeatherText} from '../index';
import {CityCardContainer} from './styles';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {addCity} from '../../store/ducks/cities';
import {Colors} from '../../resources';

type CityCardProps = {
  item: any;
  setSearch: (value: boolean) => void;
};

function CityCard({item, setSearch}: CityCardProps) {
  const dispatch = useAppDispatch();

  function handleAddCity() {
    dispatch(addCity(item));
    setSearch(false);
  }

  if (item) {
    return (
      <CityCardContainer onPress={handleAddCity}>
        <WeatherText size={22} medium>
          {item.name}
        </WeatherText>
        <WeatherText size={13} italic>
          {item.sys.country}
        </WeatherText>
        <Row justifyContent={'flex-end'}>
          <WeatherText color={Colors.purple} size={18}>
            Toque para adicionar
          </WeatherText>
        </Row>
      </CityCardContainer>
    );
  }

  return null;
}

export default CityCard;
