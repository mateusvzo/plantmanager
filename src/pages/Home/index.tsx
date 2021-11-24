import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Watering from '../../assets/watering.png';

import { Button } from '../../components/Button';

import { Container, Title, Image, Subtitle } from './styles';

export function Home(){
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Title>
        Gerencie{`\n`} 
        suas plantas de{`\n`} 
        forma fácil
      </Title>

      <Image source={Watering}/>
      
      <Subtitle>Não esqueça mais de regar suas{`\n`} 
        plantas. Nós cuidamos de lembrar você{`\n`}
        sempre que precisar.
      </Subtitle>

      <Button 
        onPress={handleSignIn}
      />
    </Container>
  );
}