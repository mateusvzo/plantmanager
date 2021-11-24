import React, { ReactNode } from 'react';

import {theme} from '../../global/styles/theme';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export function Background({ children }: Props){
  const {body_light, body_dark} = theme

  return (
    <Container
      colors={[body_light, body_dark]}
    >
      {children}
    </Container>
  )
}