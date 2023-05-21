import styled from "styled-components"

import Link from "next/link"

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 50px 0;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const ContactTitle = styled.h4`
    font-size: ${({ theme }) => theme.sizes.dog};
    color: ${({ theme }) => theme.colors.verdiGris};
    font-weight: 700;
`

export const ContactSubtitle = styled.span`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.sizes.bird};
    font-weight: 500;
    margin-top: 10px;
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.verdiGris};
    font-size: ${({ theme }) => theme.sizes.cat};
    font-weight: 700;
    margin-top: 30px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};
    }
`

export const CreatedWith = styled.span`
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.sizes.bird};
    font-weight: 500;

    & > span {
        color: ${({ theme }) => theme.colors.verdiGris};
    }
`