import React from 'react';
import styled from '@emotion/styled';

const Name = styled.h1`
    //background-color: #0a192f;
    padding: 10px;
    text-align: center;
    
`;
const Career = styled.p`
    font-size: 5px;
    background-color: #696969;
    text-align: center;
    padding: 15px;
    border-radius:10px;
`;

const Hello = () =>{
    return(
        <>
            <Name>Hello👋 My name is Bo-chain</Name>
            <Career>Student, junior-developer </Career>
        </>
    );
}

export default Hello;