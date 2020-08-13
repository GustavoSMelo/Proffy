import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #7159ac;
  padding: 30px;
  flex-direction: column;
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ArrowLeft = styled.TouchableOpacity`
  width: 120px;
  height: 30px;
`

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
`
