import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { theme } from '../../global/styles/theme';

import { Container, Title, Subtitle, Input } from './styles';

export function SignIn(){
  const [name, setName] = useState('');
  const navigation = useNavigation();


  function handleAddName() {
    if (!name.trim()) {
      return;
    }

    navigation.navigate('Welcome');
  }

  return (
    <Container>

      <Title>
        😀
      </Title>

      <Subtitle>
        Como podemos{`\n`}
        chamar você?{`\n`}
      </Subtitle>

      <Input 
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Digite seu nome"
        style={{ borderBottomColor: theme.gray, borderBottomWidth: 3}}
      />

      <ButtonAdd 
        title = "Confirmar"
        onPress={handleAddName}
      />
    </Container>
  );
}