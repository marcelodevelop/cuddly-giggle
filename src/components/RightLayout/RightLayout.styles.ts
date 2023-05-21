import styled from "styled-components"

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-items: center;
    width: 70%;
    height: max-content;
    margin-left: auto;

    @media screen and (max-width: 700px) {
        margin-left: 0;
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        width: 60%;
    }
`