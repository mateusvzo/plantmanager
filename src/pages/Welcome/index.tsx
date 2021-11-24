import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ButtonAdd } from '../../components/ButtonAdd';


import { Container, Title, TitleTwo, Subtitle } from './styles';

export function Welcome(){
  const navigation = useNavigation();

  function handleChancePage(){
    navigation.navigate('Dashboard')
  }

  return (
    <Container>
      <Title>
      😀
      </Title>

      <TitleTwo>
        Prontinho
      </TitleTwo>

      <Subtitle>
        Agora vamos começar a cuidar das suas{`\n`}
        plantinhas com muito cuidado.
      </Subtitle>

      <ButtonAdd 
        title="Começar"
        onPress={handleChancePage}
      />

    </Container>
  );
}