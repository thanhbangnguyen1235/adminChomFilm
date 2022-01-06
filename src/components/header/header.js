import styled from "styled-components"

export const HeaderHome = styled.header`
    display: flex;
    justify-content: space-between;
    display : flex;
    flex-direction: columns;
    position: fixed;
    left: auto;
    right: 0;
    flex-shrink: 0;
    background-color: blue;
    padding: 20px;
    border-radius: 5px;
    z-index: 1000;
    left: 270px;
`
export const Right = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
`
export const Left = styled.div`
    display :flex;

`

export const AdminName = styled.span`
    margin: auto;
    margin-right: 10px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    color: white;
`
