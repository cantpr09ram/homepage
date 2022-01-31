import React from "react";
import styled from "@emotion/styled";
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoMailOutline } from "react-icons/io5";

const Container = styled.div`
    gap: 96px;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
`;

const LinkList = styled.div`
padding-left:10%;
`;

const Link = styled.h3`
font-size: 20px;
color: #64ffda;
`;

const OnTheWeb = () =>{
    return(
        <Container>
        <h2>On the web</h2>
        <LinkList>
            <Link><IoLogoGithub></IoLogoGithub><a rel="noreferrer" href="https://github.com/bochainwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoLogoTwitter></IoLogoTwitter><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoLogoInstagram></IoLogoInstagram><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
            <Link><IoMailOutline></IoMailOutline><a rel="noreferrer" href="mailto:bochainwu@gmail.com" target="_blank"> Say Hello👋to me</a></Link>
            
        </LinkList>
        </Container>
    );
};

export default OnTheWeb;