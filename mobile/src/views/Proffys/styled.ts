import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  padding: 30px;
  flex-direction: column;
  background-color: #C7C6C5;
`

export const Card = styled.View`
  border-radius: 15px;
  border: none;
  padding: 20px;
  width: 100%;
  background-color: #fff;
`

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;

`

export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 240px;
  margin-right: 15px;
`

export const Name = styled.Text`
  color: #7159ac;
  font-size: 18px;
`

export const Description = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: justify;
  color: #101010;
  font-size: 16px;
`

export const PriceContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

export const PriceText = styled.Text`
  color: #6144A8;
  font-weight: bold;
  font-size: 16px;
`

export const LikeButton = styled.TouchableOpacity`
  background-color: #7159ac;
  border: none;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 15px;
  margin-right: 5px;
  height: 70px;
`

export const RemoveLikeButton = styled.TouchableOpacity`
  background-color: #A83835;
  border: none;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 15px;
  margin-right: 5px;
  height: 70px;
`

export const EnterContactButton = styled.TouchableOpacity`
  background-color: #26BF44;
  border: none;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 70px;
  flex-direction: row;
`

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
