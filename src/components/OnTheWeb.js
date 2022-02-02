import React from "react";
import styled from "@emotion/styled";
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoMailOutline } from "react-icons/io5";
import { Title, Container1 } from "./Constants";



const LinkList = styled.div`
padding-left:10%;
`;

const Link = styled.h3`
font-size: 20px;
color: #64ffda;
`;

const OnTheWeb = (props) =>{
    const size = props.wininfo;

    return(
        <Container1>
        <Title size={size} >On the Web</Title>
            <div>
            <LinkList>
                <Link><IoLogoGithub></IoLogoGithub><a rel="noreferrer" href="https://github.com/bochainwu" target="_blank">  @bochainwu</a></Link>
                <Link><IoLogoTwitter></IoLogoTwitter><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
                <Link><IoLogoInstagram></IoLogoInstagram><a rel="noreferrer" href="https://twitter.com/bochianwu" target="_blank">  @bochainwu</a></Link>
                <Link><IoMailOutline></IoMailOutline><a rel="noreferrer" href="mailto:bochainwu@gmail.com" target="_blank"> Say Hello👋to me</a></Link>
            </LinkList>
            </div>
        </Container1>
       
    );
};

export default OnTheWeb;