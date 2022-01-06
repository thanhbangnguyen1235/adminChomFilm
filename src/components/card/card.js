import styled from "styled-components";

export const Card = styled.div`
    min-width : 20%;
    max-width: 20%;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    background-color: white;
    padding : 20px;
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-left: 17px;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
`
export const Title = styled.span`
    color: gray;
    font-size: 18px;
    font-weight: initial;
    font-family: "Roboto","Helvetica","Arial",sans-serif;

`
export const Numbers = styled.span`
    color: black;
    font-weight: blod;
    border-bottom: 1px solid gray;
    padding-bottom: 40px;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
`
export const LogoCard = styled.div`
    position: absolute;
    top: -20px;
    left: 20px;
    padding: 20px;
    width: 25px;
    height: 25px;
    border-radius: 6px;
    animation-name: example;
    animation-duration: 2s;
    @keyframes example {
        0%   { left: 200px; top:14px;    width: 40px; height: 40px;}
 
        100% { left:20px; top:-20px;}
      }

`