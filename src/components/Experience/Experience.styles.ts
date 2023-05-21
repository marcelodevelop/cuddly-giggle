import styled from "styled-components"

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 50px;

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

export const ExperienceCard = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    min-height: 150px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

    &:hover {
        background: rgba(0,0,0,0.1);
    }
`

export const ExperienceCardYear = styled.div`
    width: 30%;
    height: 100%;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
    }
`

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.sizes.bird};
    font-weight: 500;
`

export const ExperienceCardInfo = styled.div`
    width: 70%;
    height: 100%;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const CardTitle = styled.h4`
    color: ${({ theme }) => theme.colors.verdiGris};
    font-size: ${({ theme }) => theme.sizes.turtle};
    font-weight: 700;
    text-transform: uppercase;
`

export const CardRank = styled.span`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.sizes.bird};
    font-weight: 500;
`

export const CardList = styled.ul`
    margin-top: 10px;
    margin-left: 15px;

    & > li {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.sizes.bird};
        font-weight: 500;
        margin-bottom: 4px;
    }
`   

export const CardTags = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const Tag = styled.div`
    width: max-content;
    padding: 8px;
    margin-right: 10px;
    margin-top: 5px;
    min-width: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.sizes.caracol};
    font-weight: 500;
    border: 1.5px solid ${({ theme }) => theme.colors.verdiGris};
    color: ${({ theme }) => theme.colors.seasalt};

    &:hover {
        background: ${({ theme }) => theme.colors.verdiGris};
    }
`