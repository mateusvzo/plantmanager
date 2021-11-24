import React from 'react';

import {
  View
} from 'react-native';

import { Profile } from '../../components/Profile';

import { Container, Header } from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}