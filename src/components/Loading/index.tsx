import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoadingContainer, AbsoluteContainer} from './styles';
import {Colors} from '../../resources';

type LoadingProps = {
  absolute?: boolean;
};

const Loading = ({absolute}: LoadingProps) => {
  if (absolute) {
    return (
      <AbsoluteContainer>
        <ActivityIndicator animating size={'large'} color={Colors.purple} />
      </AbsoluteContainer>
    );
  }
  return (
    <LoadingContainer>
      <ActivityIndicator
        style={{alignSelf: 'center'}}
        size={'large'}
        color={Colors.purple}
      />
    </LoadingContainer>
  );
};

export default Loading;
