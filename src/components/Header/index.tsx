import React, {useEffect, useState} from 'react';
import {
  DefaultPressable,
  Row,
  Separator,
  WeatherText,
  WeatherInput,
} from '../index';
import {Close, Search} from '../../icons';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {clearSearch} from '../../store/ducks/searchCity';
import {Colors, t} from '../../resources';
import LanguageToggle from '../LanguageToggle';

type HeaderProps = {
  isSearch: boolean;
  setSearch: (value: boolean) => void;
  setFilter: (value: string) => void;
};

function Header({isSearch, setSearch, setFilter}: HeaderProps) {
  const [searchedText, setSearchedText] = useState('');
  const {loading} = useAppSelector(({searchCityState}) => searchCityState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilter(searchedText);
  }, [searchedText, setFilter]);

  function handleCloseSearch() {
    setSearch(false);
    setFilter('');
    dispatch(clearSearch());
  }

  return (
    <>
      <Separator y={20} />

      {isSearch ? (
        <Row left={10} justifyContent={'flex-start'} alignItems={'center'}>
          <DefaultPressable onPress={handleCloseSearch}>
            <Close />
          </DefaultPressable>
          <Separator x={18} />
          <WeatherInput
            returnKeyType={'search'}
            onChangeText={setSearchedText}
            isLoading={loading}
            placeholder={t('placeHolderMessage')}
          />
        </Row>
      ) : (
        <Row
          left={10}
          right={30}
          height={51}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <WeatherText size={22} bold color={Colors.purple}>
            {t('cities')}
          </WeatherText>
          <Row>
            <LanguageToggle />
            <Separator x={25} />
            <DefaultPressable onPress={() => setSearch(true)}>
              <Search />
            </DefaultPressable>
          </Row>
        </Row>
      )}
      <Separator y={20} />
    </>
  );
}

export default Header;
