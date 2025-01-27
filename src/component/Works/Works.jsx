import React from 'react'
import styled from 'styled-components'
import MiniDiaryImage from "../../assets/undraw_experience-design_d4md.svg";
import PortfolioImage from "../../assets/undraw_portfolio-website_838t.svg";

const ViewPort = styled.div`
    width:100%;
    height:100vh;
    //background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:650px) {
        height:145vh;
    }
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:45%;
    height:100%;

    @media (max-width:1200px) {
        width: 50%;
    }

    @media (max-width:1000px) {
        width: 60%;
    }

    @media (max-width:850px) {
        width: 70%;
    }

    @media (max-width:750px) {
        width: 80%;
    }

    @media (max-width:650px) {
        width: 60%;
    }

    @media (max-width:550px) {
        width: 70%;
    }

    @media (max-width:500px) {
        width: 80%;
    }

    @media (max-width:450px) {
        width: 90%;
    }
`

const Heading = styled.h1`
    font-size:3.5rem;
    font-family: "Yusei Magic", serif;
    font-weight: 400;
    font-style: normal;
`
const MiniDescription = styled.small`
    
`

const Main = styled.div`
    display:flex;
    width:100%;
    margin-top:1.5rem;
    gap:1.5rem;

    @media (max-width:650px) {
        flex-direction: column;
        gap:4rem;
    }
`
const Work = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-right:0.25rem;
`

const WorkThumbnail = styled.img`
    height:10rem;
    background-color:rgb(255,255,255,0.5);
    border-radius:0.5rem;
    cursor: pointer;

    @media (max-width:1100px) {
        height: 8rem;
    }

    @media (max-width:650px) {
        height: 13rem;
    }

`
const WorkName = styled.strong`
    margin-top:1rem;
`

const WorkDescription = styled.div`
    margin-top:1rem;
`
const WorkGitHubUrl = styled.a`
    margin-top:1rem;
    font-size:0.85rem;
`


export default function Works() {
    const works = [
        {
            thumbnail: MiniDiaryImage,
            name: "Mini Diary App",
            description: "Mini Diaryは、MERNスタックを使用して構築されたシンプルかつ直感的な日記SNSです。日記の記録といった機能に加え、フォロー, いいね, コメントなどのようなSNSの基本的な機能があります。",
            GitHubUrl: "https://github.com/yamakai7649/MiniDiary-Backend"
        },
        {
            thumbnail: PortfolioImage,
            name: "Portfolio",
            description: "このWebページはReactを使用して構築しました。フロントエンドのみの構成で、静的サイトとしてVercelにデプロイしています。GitHubと連携し、継続的な改善と更新を効率化しました。",
            GitHubUrl: "https://GitHub/example/12345678"
        }
    ];

  return (
      <ViewPort>
          <Container>
              <Heading>Works</Heading>
              <MiniDescription>※実務経験はありません。今までに個人で行った内容を記載しています。</MiniDescription>
              <Main>
                  {works.map((work) => {
                      return (
                          <Work>
                              <WorkThumbnail src={work.thumbnail}></WorkThumbnail>
                              <WorkName>{work.name}</WorkName>
                              <WorkDescription>{work.description}</WorkDescription>
                              <WorkGitHubUrl href={work.GitHubUrl}>{work.GitHubUrl}</WorkGitHubUrl>
                          </Work>
                      );
                  })}
              </Main>
          </Container>
    </ViewPort>
  )
}
