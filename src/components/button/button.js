import styled from "styled-components";

export const ButtonReload = styled.div`
    background-color: #2f2ff2;
    border-radius: .5rem;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-size: 20px;
    justify-content: center;
    padding: 0.5rem 1.75rem;
    text-decoration: none;
    border: 0;
    width: fit-content;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    &:hover {
        background-color: blue;
        transform: scale(1.02);
    }

    @media (min-width: 768px) {
    .button-43 {
        padding: 1rem 2rem;
    }
    margin-bottom: 20px;
}
`