import React from 'react'
import {
  Container,
  Small,
  Title,
  ContainerImage,
  WebPlatformButton
} from './styled'

import Background from '../../assets/images/give-classes-background.png'

const GiveClasses = () => {
  return (
    <>
      <ContainerImage source={Background}>
        <Title>Do you want be a Proffy?</Title>
        <Small>This is awesome,but first, you need to enter in our web platform and do the registry there </Small>
      </ContainerImage>
      <Container>
        <WebPlatformButton>
          <Title>Access web application</Title>
        </WebPlatformButton>
      </Container>
    </>
  )
}

export default GiveClasses
