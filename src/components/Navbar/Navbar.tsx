import { useState } from "react"
import Image from "next/image"

import { 
    AboutMe,
    Menu,
    NavbarContainer, 
    NavbarLogo, 
    NavbarLogoDescription, 
    StyledLink,
    SocialMedia,
    StyledIconLink,
} from "./Navbar.styles"

const Navbar = () => {
    const [active, setActive] = useState('About')

    const handleOnClick = (e: any) => {
        setActive(e.target.innerHTML)
    }

    return (
        <NavbarContainer>
           <NavbarLogo>Marcelo Acevedo</NavbarLogo>
           <NavbarLogoDescription>Fullstack Developer at Quuack</NavbarLogoDescription>
           <AboutMe>I build accessible, inclusive products and digital experiences for web and mobile.</AboutMe>
           <Menu>
                <StyledLink onClick={handleOnClick} className={active === "About" ? 'active' : ''} href="#about-me">About</StyledLink>
                <StyledLink onClick={handleOnClick} className={active === "Experience" ? 'active' : ''} href="#experience">Experience</StyledLink>
                <StyledLink onClick={handleOnClick} className={active === "Contact" ? 'active' : ''} href="#contact">Contact</StyledLink>
           </Menu>
           <SocialMedia>
            <StyledIconLink href="https://github.com/marcelodevelop">
                <Image
                    priority
                    src="/icons/github.svg"
                    height={35}
                    width={35}
                    alt="Checkout my Github"
                />
            </StyledIconLink>
            <StyledIconLink href="https://www.linkedin.com/in/marcelo-acevedo-0856011ba/">
                <Image
                    priority
                    src="/icons/linkedin.svg"
                    height={35}
                    width={35}
                    alt="Checkout my Linkedin"
                />  
            </StyledIconLink>
            <StyledIconLink href="mailto: acevedomarcelo07@gmail.com">
                <Image
                    priority
                    src="/icons/email.svg"
                    height={35}
                    width={35}
                    alt="Contact me!"
                />
            </StyledIconLink>
           </SocialMedia>
        </NavbarContainer>
    )
}

export default Navbar