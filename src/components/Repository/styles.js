import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 4px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
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
`;
