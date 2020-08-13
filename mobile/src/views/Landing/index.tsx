import React from 'react'
import {
  BackgroundContainer,
  Container,
  LandingImage,
  GiveClassesButton,
  Icon,
  StudyButton,
  Title
} from './styled'

import Land from '../../assets/images/landing.png'
import Study from '../../assets/images/icons/study.png'
import GiveClassIcon from '../../assets/images/icons/give-classes.png'
import { useNavigation } from '@react-navigation/native'

const Landing = () => {
  const navigation = useNavigation()

  return (
    <>
      <BackgroundContainer>
        <LandingImage source={Land} />
        <Title>Welcome {'\n'}
        What do you want to do ?</Title>
      </BackgroundContainer>
      <Container>
        <StudyButton onPress={() => navigation.navigate('TabsRoutes')}>
          <Icon source={Study} />
          <Title>Study</Title>
        </StudyButton>
        <GiveClassesButton onPress={() => navigation.navigate('GiveClasses')}>
          <Icon source={GiveClassIcon} />
          <Title>Give Class</Title>
        </GiveClassesButton>
      </Container>
    </>
  )
}

export default Landing
