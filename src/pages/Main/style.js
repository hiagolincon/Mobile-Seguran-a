import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #04041F;
`;

export const Circle = styled.View`
  position: relative;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const TextCircle = styled.Text`
  position: absolute;
  width: 210px;
  height: 100px;
  top: 85px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 85px;
  line-height: 105px;
  color: #00D1FF;
`;

export const SectionNavigate = styled.View`
  background-color: #0C0C37;
  height:100%;
`;

export const NavigateButtons = styled.View`
  padding: 0 10px;
  justify-content: space-around;
  flex-direction: row;
`;
export const ButtonNavigate = styled.TouchableOpacity`

`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
`;
