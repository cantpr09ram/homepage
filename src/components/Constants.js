import styled from "@emotion/styled";

const Container2 = styled.div`
    display: flex;
    gap:20px;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px; 
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 40px;
    padding-bottom: 40px;
    line-height:40px;
`;

const Title = styled.h1`
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

const AboutInfo = styled.div`
    flex-basis: ${({ size }) => (size === "tablet" ? 'auto' : '60%')};
    display: flex;
    gap: 96px;
    line-height: 24px;
    flex-direction: column;
    overflow: hidden;
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
    justify-content: center; 
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const PicWarper = styled.img`
    border-radius:20px;
    margin-bottom: 8px;
`;

export {Container1, Container2, Title, AboutInfo, AboutPic, AboutText, PicWarper};