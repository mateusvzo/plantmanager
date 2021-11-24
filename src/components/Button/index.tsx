import React from 'react';
import { TouchableOpacityProps } from 'react-native';


import { Container, Icon } from './styles';

type Props = TouchableOpacityProps

export function Button({...rest}: Props){
  return (
    <Container {...rest}>
        <Icon name="right" />
    </Container>
  );
}