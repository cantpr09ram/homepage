import React from 'react';
import styled from '@emotion/styled';

const Name = styled.h1`
    //background-color: #0a192f;
    padding: 10px;
    text-align: center;
    
`;
const Career = styled.div`
    font-size: 16px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius:10px;

    
`;

const Hello = () =>{
    return(
        <>
            <Name>Hello👋 My name is Bo-chain</Name>
            <Career>I am a student/junior-developer </Career>
        </>
    );
}

export default Hello;