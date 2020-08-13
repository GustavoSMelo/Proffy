import React from 'react'
import { Image } from 'react-native'
import Header from '../../components/header'
import {
  AvatarImage,
  Card,
  Container,
  Description,
  EnterContactButton,
  Name,
  PriceContainer,
  PriceText,
  RemoveLikeButton,
  RowContainer,
  TextButton
} from '../Proffys/styled'

import Wpp from '../../assets/images/icons/whatsapp.png'
import Dislike from '../../assets/images/icons/unfavorite.png'

const Favorites = () => {
  return (
    <>
      <Header text='Your favorites proffys' />
      <Container>
        <Card>
          <RowContainer>
            <AvatarImage source={{ uri: 'https://avatars1.githubusercontent.com/u/45046288?s=460&u=19b6d6848332724f671d49fb2555400ba8effb69&v=4' }} />
            <Name>Gustavo S. Melo  {'\n\n'}Math</Name>
          </RowContainer>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis delectus tempora ad consequuntur nihil! Necessitatibus deleniti non nemo facere exercitationem et, harum doloremque quos vero unde molestiae, neque sequi?
          </Description>
          <PriceContainer>
            <PriceText>Price/class: 120.00 BRL</PriceText>
          </PriceContainer>
          <RowContainer>
            <RemoveLikeButton>
              <Image source={Dislike} />
            </RemoveLikeButton>
            <EnterContactButton>
              <Image source={Wpp} />
              <TextButton>Enter in contact</TextButton>
            </EnterContactButton>
          </RowContainer>
        </Card>
      </Container>
    </>
  )
}

export default Favorites
