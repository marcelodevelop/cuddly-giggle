import { 
    ContactContainer,
    ContactTitle,
    ContactSubtitle,
    StyledLink,
    CreatedWith,
} from "./Contact.styles"

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactTitle>Contact me</ContactTitle>
            <ContactSubtitle>
                For any questions or queries, listed below are ways in which you can reach me.
            </ContactSubtitle>
            <StyledLink href="mailto: acevedomarcelo07@gmail.com">Get in touch</StyledLink>
            <CreatedWith>This site was build using <span>Next.JS</span>, <span>Typescript</span>, <span>Styled Components</span> and <span>Sanity</span> as the CMS</CreatedWith>
        </ContactContainer>
    )
}

export default Contact