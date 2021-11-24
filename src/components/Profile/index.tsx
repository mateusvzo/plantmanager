import React from 'react';
import { ButtonAdd } from '../ButtonAdd';
import { 
  Container,
  Content,
  User,
  Greeting,
  UserName,
  Image,
  Subtitle,
  Menu
} from './styles';

export function Profile(){
  return (
    <Container>
      <Content>
        <User>
          <Greeting>
            Ola,
          </Greeting>
          <UserName>
            Mateus
          </UserName>
        </User>
        <Image source={
          {
            uri:'https://avatars.githubusercontent.com/u/56977047?v=4'
          }
        }
        />
      </Content>

      <Subtitle> 
        Em qual ambiente{`\n`}
        você quer colocar sua planta?
      </Subtitle>

      <Menu>
        <ButtonAdd 
          title="Sala"
          style={[{width: 80, marginRight: 10}]}
        />
        <ButtonAdd 
          title="Quarto"
          style={[{width: 80, marginRight: 10}]}
        />
        <ButtonAdd 
          title="Cozinha"
          style={[{width: 80, marginRight: 10}]}
        />
        <ButtonAdd 
          title="Banheiro"
          style={[{width: 80, marginRight: 10}]}
        />

      </Menu>
    </Container>
  );
}