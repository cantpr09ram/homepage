import React from 'react';
import {Container2, Title, AboutInfo, AboutText, AboutPic} from './Constants';
import Lottie from 'react-lottie';
import animationData from"../lottie/89032-victory-sign-baby-astronaut.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


const Hello = (props) => {
    const size = props.wininfo;
    return(
        <>
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
                    <Title size={size}>Hello👋</Title>
                    <h3>My name is Bo-chain </h3>
                    <h2>🧑‍🎓👨‍💻🧋👊</h2>
                </AboutText>   
            </AboutInfo>
        </Container2>
        </>
    );
}

export default Hello;