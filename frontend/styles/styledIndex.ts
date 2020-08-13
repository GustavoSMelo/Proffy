import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: #7159ac;
  height: 100vh;
  align-items: center;
  justify-content: center;


  article, section{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  article{
    justify-content: space-around;
  }

  .titleContainer{
    width: 50%;
    padding: 5px;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  .titleApp{
    font-size: 64pt;
    font-weight: bold;
  }

  .descriptionApp{
    font-size: 24pt;
  }

  .figure{
    width: 50%;
  }

  .image{
    width: 100%;
    height: 30%;
  }

  section{
    justify-content: space-between;
  }

  .SpanDisplay{
    display: flex;
    flex-direction: row;
    width: 70%;
  }

  .StudyButton{
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    font-size: 16pt;
    background-color: #997FBD;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 120px;
    padding-right: 120px;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin: 20px;
  }

  .ClassButton{
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    font-size: 16pt;
    background-color: #0f0;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 120px;
    padding-right: 120px;
    border-radius: 5px;
    border: none;
    margin: 20px;
  }

  .Connections{
    font-size: 16pt;
    color: #acacac;
  }

  @media screen and (max-width: 980px){
    article, section {
      flex-direction: column;
    }

    .figure{
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .image, .titleContainer, .SpanDisplay{
      width: 100%;
    }

    .StudyButton, .ClassButton{
      width: 50%;
      padding-left: 60px;
      padding-right: 60px;
    }
  }
`
