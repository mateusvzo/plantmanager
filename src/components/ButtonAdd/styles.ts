import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  background-color: ${({theme}) => theme.green};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.white}
`;