import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import { Background } from './src/components/Background';
import { theme } from './src/global/styles/theme';

import { Routes } from './src/routes';

export default function App() {
  return (
    <Background>
      <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Background>
  );
}
