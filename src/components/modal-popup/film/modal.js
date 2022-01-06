import { style } from '@mui/system';
import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  top: 0;
  left: 0;
`;
export const WrapperModal = styled.div`
  width: 600px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
    display: flex;
  padding: 10px;
`;
export const Content = styled.div`
    width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 20px;
    background-color: yellow;
    color: black;
    border: none;
    width: 100%;
    border-radius: 10px;
    margin: 20px 0px;
  }
  h1 {
    display: block;
    justify-content: center;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: white;
    line-height: 1.2;
    text-align: center;
    font-weight: 600;
  }
  input {
    font-family: Poppins-Medium;
    font-size: 16px;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 25px;
    background: 0 0;
    padding: 0 7px 0 13px;
    color: black;
    margin: 10px 0px;
    border: 1px groove gray;
  }
  i {
    padding: 0px 5px;
    width: 20px;
    height: 20px;
  }
  form{
      width: 100%;
  }
`;
export const Divide = styled.div`
  width: 45%;
  padding: 1%;

  
`
export const EditGroup = styled.div`
  width: 100%;
  display: flex;
`

export const ButtonGroup = styled.div`
    width: 100%;
    textarea {
        rows: 5;
        font-family: Poppins-Medium;
        color: black;
        font-size: 16px;
        font-weight: 300;
        width: 100%;
        border-radius: 5px;
    }
`
export const ButtonGroup2 = styled.div`
    width: 100%;
    display: flex;  
    button:hover{
      cursor: pointer;
    }
`

export const ElementEdit = styled.div`
 display: flex;
  height: fit-content;
  justify-content: space-between;
  font-weight: bold;

`

export const Errors = styled.div`
  color: red;
  justify-content: center;
  display: flex;
`;
export const Button = styled.button`
  background-color: yellow;
  color: black;
  font-family: serif;
  height: 40px;
  font-size: 23px;
  padding: 10px 20px;
  border: none;
  width: 100%;
  border-radius: 10px;
  margin: 20px 0px;
  cursor: pointer;
  font-weight: 1000;
  margin-right: 20px;
`
export const NameEdit = styled.span`
margin: auto;
margin-right: 10px;
font-weight: bold;
`
export const Input = styled.input`
  flex: 1;
`
export const NamePage = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: blue;
    text-align: center;
    margin: 20px;
`