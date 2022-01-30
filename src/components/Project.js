import React from "react";
import styled  from "@emotion/styled";
import projectArr from '../project.json';



const Container = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: repeat( ${({ size }) => (size === "tablet" ? '1' : '2')}, minmax(5px, 1fr));
    grid-gap: 10px;
    flexWrap: "wrap";
    `;
const ProjectCard = styled.header`
    display: "inline-block";
    background-color: #696969;
    color: #FFFAFA;
    border-radius:10px;
    padding: 20px;
    line-height:50px;
    word-wrap:break-word; 
    word-break:break-all; 
    overflow: hidden;
`;
const ProjectName = styled.div`
    text-align: left;
    font-size: 25px`;
const ProjectDescription = styled.div`
    text-align: left;
    line-height:20px;
    font-size: 10px;
    `;
const ProjectLanguage = styled.div`
    text-align: left;
    font-size: 10px`;
const TechStack = styled.div`
    text-align: left;
    font-size: 10px`;
const ProjectUrl = styled.div`
`;

const project_length = projectArr.length;
const counters = Array.from({ length: project_length }, (_, index) => index);



const Project = (props) =>{
    const size = props.wininfo;
    return(
        <>
            <h2>Project</h2>
            <Container size={size}>
            {counters.map(item => 
                <ProjectUrl>
                <ProjectCard key="{item}">
                    <ProjectName>test</ProjectName>
                    <ProjectDescription>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ProjectDescription>
                    <ProjectLanguage>python</ProjectLanguage>
                    <TechStack>tensorflow</TechStack>
                </ProjectCard>
                </ProjectUrl>
                )}
            </Container>
        </>
        
        
    );
};

export default Project;