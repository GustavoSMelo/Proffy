import styled from 'styled-components'

export const Header = styled.header`
  background-color: #7159ac;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 20px;
  padding-bottom: 15px;
  color: #fff;

  .Navigation{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1{
    font-size: 26pt;
    font-weight: bold;
  }

  small{
    font-weight: 18pt;
  }

  figure, img{
    width: 60px;
    height: 30px;
    cursor: pointer;
  }

  input, select{
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    padding: 15px;
    width: 100%;
    margin: 15px;
  }

  @media screen and (max-width: 970px){
    section.Navigation{
      display: flex;
      flex-direction: column;
    }

    input, select{
      width: 95%;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CECED1;
  justify-content: column;
  height: 100vh;

  .proffy-container{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    border: solid 1px #999999;
    width: 50%;
    margin: 30px;
  }

  .profile-container{
    display: flex;
    justify-content: row;
  }

  .profile-container > figure > img{
    width: 100px;
    height: 100px;
    border-radius: 120px;
  }

  .profile-img, figure{
    width: 100px;
    height: 80px;
    border-radius: 120px;
  }

  figure{
    margin-right: 12px;
  }

  .proffy-name{
    font-size: 24pt;
    color: #32264d;
    font-weight: bold;
    margin: 5px;
  }

  p{
    color: #6a6180;
    font-size: 16pt;
  }

  .RowContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  small{
    color: #808080;
  }

  h2{
    color: #32264d;
    font-weight: bold;
  }

  button{
    background-color: #0f0;
    padding: 5px;
    width: 250px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button > p {
    font-weight: bold;
    font-size: 16pt;
    color: #fff;
  }

  .wppIcon{
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 870px){
    .proffy-container{
      width: 80%;
    }

    .RowContainer{
      display: flex;
      flex-direction: column;
    }
  }
`;
