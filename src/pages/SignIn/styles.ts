import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.heading};
`;

export const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.heading};
  margin: 32px 0;
`;

export const Input = styled.TextInput`
  width: 80%;
  padding: 12px;
  text-align: center;
  color: ${({ theme}) => theme.body_dark};
`;