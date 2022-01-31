import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    gap: 96px;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
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

export {Container, Title};