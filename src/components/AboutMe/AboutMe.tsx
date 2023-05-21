import { 
    AboutMeContainer, 
    StyledText,
    StyledLink,
    Title
} from "./AboutMe.styles"

const AboutMe = () => {
    return (
        <AboutMeContainer id="about-me">
            <Title>About me</Title>
            <StyledText>
             Back in 2013, I decided to start programming to copy a web based game called
             {" "}
             <StyledLink href="https://habbo.es/">Habbo</StyledLink>
             {" "} this was a success, not my most proud work, but it was working, thats the moment when
             I fall in love with programming I decided to go ahead and learn more about it.
            </StyledText>
            <StyledText>
             In 2017 I land my first job as a freelancer with only 15 years old and I started to learn more about
             Javascript, in 2019 I land in my first real job, in a really big company called
             {" "}
             <StyledLink href="https://www.tdp.com.py/inicio">TDP</StyledLink>
             {" "} where I started to learn about React and React Native.
            </StyledText>
            <StyledText>
                Fast-forward to today, and I&apos;ve had the privilege of building software for a 
                {" "} <StyledLink href="https://wcanvas.com/">Creative Agency</StyledLink> and for
                a {" "} <StyledLink href="https://www.quuack.com/">Product Development Company</StyledLink>
                {" "} where I still working till today.
            </StyledText>
            <StyledText>
                When I am not working, I am probably somewhere in a Mountain, or probably making something that make me feel adrenaline. I also like to play video games in my free time.
            </StyledText>
        </AboutMeContainer>
    )
}

export default AboutMe