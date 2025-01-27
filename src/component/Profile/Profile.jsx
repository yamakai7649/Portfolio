import React from 'react'
import styled from 'styled-components'
import SchoolIcon from '@mui/icons-material/School';
import iconImage from "../../assets/icon.jpeg";


const ViewPort = styled.div`
    width:100%;
    height:100vh;
    background-color:rgb(255,255,255,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:100%;


    @media (max-width:700px) {
        width: 60%;
    }

    @media (max-width:600px) {
        width: 70%;
    }

    @media (max-width:500px) {
        width: 80%;
    }

    @media (max-width:400px) {
        width: 90%;
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
    align-items:center;
    justify-content:center;
    gap:0.5rem;

    @media (max-width:1000px) {
        flex-direction:column;
    }
`

const ProfileImage = styled.img`
    width:10rem;
    height:10rem;
    border-radius:50%;
    object-fit: cover;

    @media (max-width:1000px) {
        margin-bottom:1.5rem;
    }
`
const Details = styled.div`
    margin-left:1rem;
    margin-right:1rem;
`

const BasicInfo = styled.div`
    
`

const AdditionalInfo = styled.div`
    margin-top:0.75rem;
    display:flex;
    align-items:center;
`

const Name = styled.strong`
    font-size:1.25rem;
    font-weight:500;
`

const From = styled.small`
    margin-left:1.5rem;
`

const Univercity = styled.p`
    margin-left:1rem;
`

const Description = styled.div`
    margin-top:0.5rem;
`

const ContactInfo = styled.p`
    margin-top:0.5rem;
    display:flex;
    flex-direction:column;
`

const ContactEmail = styled.p`
    font-size:0.85rem;
`

const ContactGitHub = styled.p`
    font-size:0.85rem;
`


export default function Profile() {
    return (
        <ViewPort>
            <Container>
                <Heading>Profile</Heading>
                <Main>
                    <ProfileImage src={iconImage}></ProfileImage>
                    <Details>
                        <BasicInfo>
                            <Name>山本 海 / ヤマモト カイ</Name>
                            <From>神奈川県出身</From>
                        </BasicInfo>
                        <AdditionalInfo>
                            <SchoolIcon></SchoolIcon>
                            <Univercity>中央大学 国際情報学部 国際情報学科</Univercity>
                        </AdditionalInfo>
                        <Description>神奈川県在住の中央大学１年生。大学では、情報社会における法律や倫理、異文化理解を学んでいます。2024年の10月にプログラミングに興味を持ち独学で勉強し始めました。将来は英語を習得して外資系企業でフルスタックエンジニアとして活躍することを目指しています。よろしくお願います！</Description>
                        <ContactInfo>
                            <ContactEmail>Mail: haishanben8@gmail.com</ContactEmail>
                            <ContactGitHub>GitHub: <a href="https://github.com/yamakai7649">https://github.com/yamakai7649</a></ContactGitHub>
                        </ContactInfo>
                    </Details>
                </Main>
            </Container>
        </ViewPort>
    );
}
