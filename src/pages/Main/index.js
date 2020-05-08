import React from 'react';
import Wave from 'react-native-waveview';
import Logo from '../Assets/Ellipse.svg';
import ImgAdd from '../Assets/ImgAdd.svg';
import ImgList from '../Assets/ImgList.svg';
import {
  Container,
  Circle,
  TextCircle,
  ButtonNavigate,
  SectionNavigate,
  NavigateButtons,
  TextButton
 } from './style.js';
import { Text } from 'react-native';



export default function Main({ navigation }) {

  return(
    <Container>
      <Circle>
        <Logo />
        <TextCircle>
            S.O.S
        </TextCircle>
      </Circle>

      <Text style={{ fontSize: 20, color: '#00D1FF', marginBottom: 110, textAlign: 'center' }}>
        Logo
      </Text>

    <SectionNavigate>
      <Wave
              H={60}
              waveParams={[
                  {A: 12, T: 480, fill: '#17174E'},
                  {A: 10, T: 470, fill: '#0C0C37'},
              ]}
              animated={true}
              speedIncreasePerWave={9000}
          />

    <NavigateButtons>
      <ButtonNavigate
        title="Ir para AddContact"
        onPress={() => navigation.navigate('AddContact')}
        >
          <ImgAdd style={{marginLeft: 27, marginBottom: 10}}/>
          <TextButton>
            Adicionar Contato
          </TextButton>
      </ButtonNavigate>


      <ButtonNavigate
        title="Ir para ListContact"
        onPress={() => navigation.navigate('ListContact')}
        >

          <ImgList style={{marginLeft: 27, marginBottom: 10}}/>
          <TextButton>
            Lista de Contatos
          </TextButton>
      </ButtonNavigate>
    </NavigateButtons>


    </SectionNavigate>

    </Container>
  )
}



