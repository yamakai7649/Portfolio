import React from 'react'
import styled from 'styled-components'

const ViewPort = styled.div`
    width:100%;
    height:100vh;
    background-color:rgb(255,255,255,0.8);
    display:flex;
    justify-content:center;
    align-items:center;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:40%;
    height:40%;

    @media (max-width: 1100px) {
        width:50%;
    }

    @media (max-width: 900px) {
        width:60%;
    }

    @media (max-width: 700px) {
        width:70%;
    }

    @media (max-width: 600px) {
        width:80%;
    }

    @media (max-width: 500px) {
        width:90%;
    }

    @media (max-width: 400px) {
        width:95%;
    }
`

const Heading = styled.h1`
    font-size:3.5rem;
    font-family: "Yusei Magic", serif;
    font-weight: 400;
    font-style: normal;
`
const Main = styled.div`
    margin-top:1rem;
    display:flex;
    width: 100%;
    justify-content:space-evenly
`
const SkillSection = styled.div`
    
`
const SkillHeading = styled.h3`
    font-size:1.5rem;
    font-weight:450;
`
const SkillContent = styled.p`
    
`

export default function Skills() {
    const skills = [
        {
            type: "Frontend",
            contents: ["HTML/CSS", "JavaScript", "React/Redux",],
        },
        {
            type: "Backend",
            contents:["Node.js", "Express", "MongoDB"]
        },
        {
            type: "Tools",
            contents:["VScode","Git/GitHub","Chatgpt"]
        }
        
        
    ]

    return (
        <ViewPort>
            <Container>
                <Heading>Skills</Heading>
                <Main>
                    {skills.map((skill) => {
                        return (
                            <SkillSection>
                            <SkillHeading>{skill.type}</SkillHeading>
                            {skill.contents.map((content) => {
                                return <SkillContent>{content}</SkillContent>
                            })}
                        </SkillSection>
                        )
                    })}
                </Main>
            </Container>
        </ViewPort>
    );
}
