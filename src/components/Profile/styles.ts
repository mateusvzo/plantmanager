import styled from 'styled-components/native';


export const Container = styled.View`
`;

export const Content = styled.View`
  margin-top: 25px;
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const User = styled.View`
`;

export const Greeting = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.heading};
  margin-right: 5px;
`;

export const UserName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.heading};
`;

export const Image = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.heading};
  margin: 32px 0;
  padding: 15px;
`;

export const Menu = styled.View`
  flex-direction: row;
  width: 50px;
`;
