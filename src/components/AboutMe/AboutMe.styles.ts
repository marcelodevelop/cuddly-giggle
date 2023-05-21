import styled from "styled-components"

import Link from "next/link"

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.verdiGris};
    font-size: ${({ theme }) => theme.sizes.dog};
    line-height: ${({ theme }) => theme.sizes.dog};
    font-weight: 700;
    margin-bottom: 10px;
`

export const StyledText = styled.p`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.sizes.turtle};
    line-height: ${({ theme }) => theme.sizes.cat};
    font-weight: 400;
    margin-bottom: 20px;
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.verdiGris};
    font-size: ${({ theme }) => theme.sizes.turtle};
    font-weight: 500;
    text-decoration: none;
`