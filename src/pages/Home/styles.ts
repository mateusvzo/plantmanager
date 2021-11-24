import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  height: 100px;
  font-weight: bold;
  color: ${({ theme}) => theme.heading};
  font-size: 26px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 35px;
  margin-top: 15px
`;

export const Image = styled.Image`
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 25px;
  margin-top: 30px;
`;