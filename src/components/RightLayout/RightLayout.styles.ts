import styled from "styled-components"

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-items: center;
    width: 100%;
    height: max-content;
    margin-left: 30%;

    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`