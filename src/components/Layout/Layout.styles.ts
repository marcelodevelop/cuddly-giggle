import styled from "styled-components"

export const LayoutContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    position: relative;
    background: ${({ theme }) => theme.colors.oxfordBlue};
`   

export const LayoutSpoth = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 2;
    padding: 100px 200px;;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        padding: 50px 20px;
        align-items: center;
    }

    @media screen and (max-width: 960px) {
        padding: 50px;
        align-items: flex-start;
    }
`

export const SpothLight = styled.div`
    position: fixed;
    opacity: 1;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
`