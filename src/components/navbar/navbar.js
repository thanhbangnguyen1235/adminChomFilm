import styled from "styled-components";

export const Dashboard = styled.div`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    width: 200px;
    height: 100vh;
    background-color: white;
    color: black;
    border-radius: 20px;
    display : block;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 30px;
    font-weight: bold;
`
export const Top = styled.h3`
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
`

export const Bottom = styled.div`
    color: black;
`

export const TypeDashboard = styled.div`
    & a{
        text-decoration: none;
      
    }
`
export const Name = styled.a`
    color: black;
    border-radius: 5px;
    &:hover{
        background-color: #5252c4;
        cursor: pointer;
        span{
            color: white;
        }
    }  
    display: flex;
    padding : 10px;
 
`
export const NameDash = styled.span`
    margin-left: 10px;
    text-decoration: none;
    color: black;
    margin : 15px 20px 0px 15px;
    width: 100%;
    height: 100%;
    padding: 20px 0xp;
    margin-top: auto;
`