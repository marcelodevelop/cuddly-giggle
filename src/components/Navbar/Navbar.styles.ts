import styled from "styled-components"

import Link from "next/link"

export const NavbarContainer = styled.div`
    display: flex;
    height: 100%;
    width: max-content;
    flex-direction: column;
    position: fixed;

    @media screen and (max-width: 700px) {
        height: max-content;
        width: 100%;
        text-align: left;
        position: initial;
    }
`

export const NavbarLogo = styled.span`
    color: ${({ theme }) => theme.colors.seasalt};
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.dinosaur};

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.sizes.shark};
    }
`

export const NavbarLogoDescription = styled.p`
    color: ${({ theme }) => theme.colors.seasalt};
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.dog};
    margin-top: 5px;
`

export const AboutMe = styled.p`
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes.turtle};
    margin-top: 20px;
    max-width: 350px;
    line-height: ${({ theme }) => theme.sizes.cat};
`

export const Menu = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: column;
`

export const StyledLink = styled(Link)`
    @keyframes barAnimation {
        from { width: 30px; }
        to { width: 50px; }
    }


    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.bird};
    text-transform: uppercase;
    margin: 10px 0px;

    &:not(.active):hover {
        color: ${({ theme }) => theme.colors.verdiGris};

        &:before {
            animation: barAnimation .1s both;
            background: ${({ theme }) => theme.colors.verdiGris};
        }
    }

    &.active {
        color: ${({ theme }) => theme.colors.verdiGris};

        &:before {
            width: 50px;
            background: ${({ theme }) => theme.colors.verdiGris};
        }
    }

    &:before {
        content: '';
        height: 1.5px;
        width: 30px;
        display: flex;
        margin-right: 5px;
        background: ${({ theme }) => theme.colors.grey};
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`