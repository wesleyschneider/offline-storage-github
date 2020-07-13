import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  padding-top: ${50 + getStatusBarHeight(true)}px;
  background-color: #121212;
`;
export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #e4e4e4;
  background: #28282a;
  border: 2px solid ${props => (props.error ? '#ff7272' : '#28282a')};
`;

export const Submit = styled.TouchableOpacity`
  background: #11decb;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
