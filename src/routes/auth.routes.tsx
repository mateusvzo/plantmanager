import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { Welcome } from '../pages/Welcome';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  )
}


