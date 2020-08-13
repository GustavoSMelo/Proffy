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
`;

export const Container = styled.main`
  display: flex;
  background-color: #CECED1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    width: 50%;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 2px #757575;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 30px;
    padding-bottom: 15px;
  }

  form > h1 {
    font-size: 24pt;
    color: #32264d;
    padding: 15px;
    border-bottom: 1px solid #707070;
  }

  form > label{
    font-size: 18px;
    color: #606060;
  }

  form > .ContainerRow{
    display: row !important;
	  justify-content: space-between;
  }

  form > span{
    display: row;
	  justify-content: space-around;
  }

  form > small{
    color: #707070;
    font-size: 16pt;
  }

  form > input, select, textarea{
    padding: 15px;
    margin-bottom: 15px;
    margin-top: 15px;
    background-color: #fff;
    border-radius: 5px;
	  border: solid 1px #999999;
	  color: #000;
    width: 95%;
  }

  textarea{
    height: 200px;
  }

  form > footer > button{
    display: flex;
    background-color: #0f0;
    border-radius: 5px;
    border: none;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 980px){
    form{
      width: 75%;
    }
  }
`;
