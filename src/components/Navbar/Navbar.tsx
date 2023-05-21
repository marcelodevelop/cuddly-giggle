import { useState } from "react"

import { 
    AboutMe,
    Menu,
    NavbarContainer, 
    NavbarLogo, 
    NavbarLogoDescription, 
    StyledLink 
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
                <StyledLink onClick={handleOnClick} className={active === "Contact" ? 'active' : ''} href="#section-1">Contact</StyledLink>
           </Menu>
        </NavbarContainer>
    )
}

export default Navbar