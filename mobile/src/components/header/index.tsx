import React from 'react'

import { Container, RowContainer, Title, ArrowLeft, Logo } from './styled'
import LogoIcon from '../../assets/images/logo.png'
import ArrowLeftIcon from '../../assets/images/icons/back.png'

import { useNavigation } from '@react-navigation/native'

const Header = ({ text }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <RowContainer>
        <ArrowLeft onPress={() => navigation.goBack()}>
          <Logo source={ArrowLeftIcon} resizeMode='contain' />
        </ArrowLeft>
        <Logo source={LogoIcon} resizeMode='contain' />
      </RowContainer>
      <Title>{text}</Title>
    </Container>
  )
}

export default Header
