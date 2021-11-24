import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 48px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.green};
  margin-top: 90px;
`;

export const Icon = styled(AntDesign)`
  font-size: 18px;
  color: ${({ theme }) => theme.white}
`;