import React from 'react';
import {DefaultPressable} from '../index';
import {ArrowLeft} from '../../icons';
import {useNavigation} from '@react-navigation/native';

type GoBackProps = {
  to?: () => void;
  goBackColor?: string;
};

function GoBack({to, goBackColor}: GoBackProps) {
  const navigation = useNavigation();

  return (
    <DefaultPressable onPress={() => (to ? to() : navigation.goBack())}>
      <ArrowLeft color={goBackColor} ml={15} darkScreen />
    </DefaultPressable>
  );
}

export default GoBack;
