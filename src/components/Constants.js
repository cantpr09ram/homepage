import React from "react";
import styled from "@emotion/styled";

const Container2 = styled.div`
    display: flex;
    gap:50px;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px; 
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 40px;
    padding-bottom: 40px;
    line-height:40px;
`;

const Title = styled.h6`
    text-align: ${({ size }) => (size === "tablet" ? 'center' : 'left')};
    font-size: 16px;
    font-size: 2em;
    line-height: 24px;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 24px;
`;

const Container1 = styled.div`
    gap: 96px;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px; 
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 40px;
    padding-bottom: 40px;
    line-height:40px;
`;


export {Container1, Container2, Title};