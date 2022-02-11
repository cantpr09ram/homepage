import React from "react";
import styled from "@emotion/styled";
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoMailOutline } from "react-icons/io5";
import { Title, Container2, AboutInfo, AboutPic, AboutText } from "./Constants";
import Lottie from "react-lottie";
import animationData from "../lottie/72700-cute-bunnies-love-animation.json";


const LinkList = styled.div`
padding-left:10%;
`;

const Link = styled.h3`
font-size: 20px;
color: #64ffda;
`;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const OnTheWeb = (props) =>{
    const size = props.wininfo;

    return(
        <Container2>   
        
        <AboutPic size={size} >
        <Lottie 
                    options={defaultOptions}
                    height={240}
                    width={240} 
                />
        </AboutPic>
        <AboutInfo size={size}>
        <AboutText>
        <Title size={size} >On the Web</Title>
        <LinkList>
            <Link><IoLogoGithub></IoLogoGithub><a rel="noreferrer" href="https://github.com/bochainwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoLogoTwitter></IoLogoTwitter><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoLogoInstagram></IoLogoInstagram><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoMailOutline></IoMailOutline><a rel="noreferrer" href="mailto:bochainwu@gmail.com" target="_blank"> Say Hello👋to me</a></Link>
        </LinkList>
        </AboutText>
        </AboutInfo>
    </Container2>
       
    );
};

export default OnTheWeb;