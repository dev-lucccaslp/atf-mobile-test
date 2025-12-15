import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Input = styled.TextInput`
  height: 44px;
  background-color: transparent;
  border-width: 1px;
  border-color: #6e6d6dff;
  border-radius: 6px;
  padding: 0 12px;
  color: #000;
`;


export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  height: 44px;
  background-color: #111;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export const ItemContainer = styled.View`
  margin-bottom: 12px;
`;

export const Original = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Short = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;
