import React from "react";
import styled  from "@emotion/styled";

const Container = styled.div`
    padding-bottom: 20px;
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
    overflow: hidden;
    transform: translateY(0px);
	transition: .5s;
`;
const ProjectName = styled.div`
    text-align: left;
    font-size: 25px`;
const ProjectDescription = styled.div`
    text-align: left;
    line-height:20px;
    font-size: 16px;
    `;
const ProjectLanguage = styled.div`
    line-height: 24px;
    text-align: left;
    font-size: 16px;
    padding-top: 20px;`;
const TechStack = styled.div`
    line-height: 24px;
    text-align: left;
    font-size: 16px;
    padding-top: 20px`;
const ProjectUrl = styled.a`
`;

const Project = (props) =>{
    const size = props.wininfo;

    const projects = {
        "homepage": {
          desc:
            "My personal website.",
          techStack: "React.js, emotion",
          language: "javascript",
          link: "https://github.com/bochainwu/homepage",
        },
        "spotify_crawler": {
          desc:
            "A spotify top 50 crawler.",
          techStack: "beauthfulsoup, urllib, datetime",
          language: "python",
          link: "https://github.com/bochainwu/potify_crawler",
        }
        
    };
    
    return(
        <>
            <h2>Project</h2>
            <Container size={size}>
                {Object.keys(projects).map((key) =>(
                    <ProjectUrl key={key} href={projects[key]["link"]}>
                    <ProjectCard>
                        <ProjectName >{key}</ProjectName>
                        <ProjectDescription >{projects[key]["desc"]}</ProjectDescription>
                        <ProjectLanguage >{projects[key]["language"]}</ProjectLanguage>
                        <TechStack >{projects[key]["techStack"]}</TechStack>
                    </ProjectCard>
                    </ProjectUrl>
                )
                )}
            </Container>
        </>
        
        
    );
};

export default Project;