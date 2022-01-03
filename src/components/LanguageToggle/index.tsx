import React from 'react';
import {Row, Separator} from '../index';
import {BrazilFlag, UsaFlag} from '../../icons';
import {BorderFlagButton} from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {changeLanguage} from '../../store/ducks/changeLanguage';

const LanguageToggle = () => {
  const {language} = useAppSelector(
    ({changeLanguageState}) => changeLanguageState,
  );

  const dispatch = useAppDispatch();

  function toggleLanguage(lang: string) {
    dispatch(changeLanguage(lang));
  }

  return (
    <Row>
      <BorderFlagButton
        onPress={() => toggleLanguage('pt-br')}
        selected={language === 'pt-br'}>
        <BrazilFlag />
      </BorderFlagButton>
      <Separator x={10} />
      <BorderFlagButton
        onPress={() => toggleLanguage('us')}
        selected={language === 'us'}>
        <UsaFlag />
      </BorderFlagButton>
    </Row>
  );
};

export default LanguageToggle;
