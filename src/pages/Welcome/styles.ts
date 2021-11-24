import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.heading};
  margin: 32px 16px 16px 0;
`;

export const TitleTwo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.heading};
  margin: 32px 16px 16px 0;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.heading};
  margin: 16px 0;
`;