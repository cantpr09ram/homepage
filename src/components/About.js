import React from "react";
import styled from "@emotion/styled";
import Me from './img/bochain.png';
import {Container2, Title} from './Constants';

const AboutInfo = styled.div`
    flex-basis: ${({ size }) => (size === "tablet" ? 'auto' : '60%')};
    display: flex;
    gap: 96px;
    line-height: 24px;
    flex-direction: column;
    overflow: hidden;
`;

const AboutText = styled.div`
    align-items: center;
    display: 'flex';
    flex-basis: 40%;
    flex-direction: column;
    gap: 36px;
`;

const AboutPic = styled.div`
    display: ${({ size }) => (size === "tablet" ? 'none' : 'flex')};
    flex-basis: 60%;   
    justify-content: center; 
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const PicWarper = styled.img`
    border-radius:20px;
    margin-bottom: 8px;
`;
const school_url = "http://www.bwjh.ylc.edu.tw/";


const About = (props) => {
    const size = props.wininfo;
    return(
        <>
            <Container2>
                <AboutInfo size={size}>
                    <AboutText>
                        <Title size={size}>About Me</Title>
                        <div>bo-chain is a high school student who studying at <a href={school_url}>Bliss and Wisdom high school</a>. 
                        <br></br>He learning Python, Javascript, C/C++, and other useful tools to help people in need.</div>
                    </AboutText>   
                </AboutInfo>
                <AboutPic size={size} >
                    <PicWarper src={Me} width="200" height="200"></PicWarper>
                </AboutPic>
                
            </Container2>
        </>
    );
}

export default About;