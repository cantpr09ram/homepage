import React from "react";
import styled from "@emotion/styled";

//const test = "I'm a software engineer and artist based in Toronto. I have profound interest in full-stack development, machine learning, human-computer interactions, and everything in between."

const AboutMe = styled.p`
    padding-left: 5%;
    padding-right: 5%;
    line-height:40px;
`

const About = () => {
    return(
        <>
            <h2>About Me</h2>
            <AboutMe>I am a high school student in Bliss and Wisdom high school.</AboutMe>
        </>
        
    );
}

export default About;