import React from "react";
import styled from "@emotion/styled";
import Me from './img/bochain.png';

const Container = styled.p`
    display: flex;
    gap: 96px;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    line-height:40px;
`;

const AboutInfo = styled.div`
    flex-basis: ${({ size }) => (size === "tablet" ? 'auto' : '60%')};
    display: flex;
    gap: 96px;
    line-height: 24px;
    flex-direction: column;
    overflow: hidden;
`;

const Title = styled.h1`
    text-align: ${({ size }) => (size === "tablet" ? 'center' : '')};
    font-size: 16px;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    line-height: 24px;
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
    gap: 96px;
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

//
const About = (props) => {
    const size = props.wininfo;
    return(
        <>
            <Container>
                <AboutInfo size={size}>
                    <AboutText>
                        <Title size={size}>About Me</Title>
                        <div>bo-chain is a high school student who study in Bliss and Wisdom high school.</div>
                    </AboutText>   
                </AboutInfo>
                <AboutPic size={size} >
                    <PicWarper src={Me} width="250" height="250"></PicWarper>
                </AboutPic>
                
            </Container>
        </>
    );
}

export default About;