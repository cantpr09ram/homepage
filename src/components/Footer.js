import React from "react";
import styled from "@emotion/styled";

const CopyRight = styled.p`
    font-size: 10px;
    text-align: center;
`;

const Footer = () =>{
    return <CopyRight>&copy; {new Date().getFullYear()} Bo Chain Wu. All Rights Reserved.</CopyRight>;
};

export default Footer;