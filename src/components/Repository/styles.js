import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  margin-bottom: 15px;
  background-color: #1e1e1e;
  border-radius: 4px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #d1d1d1;
  line-height: 20px;
  margin-top: 5px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const StarCount = styled.Text`
  margin-left: 6px;
  color: #585858;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #11decb;
  margin-left: 5px;
`;
