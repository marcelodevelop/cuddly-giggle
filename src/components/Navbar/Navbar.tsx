import Link from "next/link"

import { 
    AboutMe,
    Menu,
    NavbarContainer, 
    NavbarLogo, 
    NavbarLogoDescription, 
    StyledLink 
} from "./Navbar.styles"

const Navbar = () => {
    return (
        <NavbarContainer>
           <NavbarLogo>Marcelo Acevedo</NavbarLogo>
           <NavbarLogoDescription>Fullstack Developer at Quuack</NavbarLogoDescription>
           <AboutMe>I build accessible, inclusive products and digital experiences for web and mobile.</AboutMe>
           <Menu>
                <StyledLink className="active" href="#section-1">About</StyledLink>
                <StyledLink href="#section-1">Experience</StyledLink>
                <StyledLink href="#section-1">Contact</StyledLink>
           </Menu>
        </NavbarContainer>
    )
}

export default Navbar