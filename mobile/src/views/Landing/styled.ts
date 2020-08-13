import styled from 'styled-components/native'

export const BackgroundContainer = styled.ImageBackground`
  padding: 30px;
  background-color: #7159ac;
`
export const LandingImage = styled.Image`
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const Container = styled.View`
  background-color: #7159ac;
  padding: 30px;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
`

export const StudyButton = styled.TouchableOpacity`
  background-color: #673AF2;
  border: none;
  border-radius: 15px;
  padding: 10px;
  flex-direction: column;
  margin: 5px;
  width: 160px;
  height: 180px;
`

export const GiveClassesButton = styled.TouchableOpacity`
  background-color: #79DB62;
  border: none;
  border-radius: 15px;
  padding: 10px;
  flex-direction: column;
  margin: 5px;
  height: 180px;
  width: 160px;
`

export const Icon = styled.Image`
  width: 55px;
  height: 50px;
  margin-bottom: 30px;
`
