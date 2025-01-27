import React from 'react'
import styled from 'styled-components'

const ViewPort = styled.div`
    width:100%;
    height:calc(100vh - 4rem);
    //background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:4rem;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:40%;
    height:100%;

    @media (max-width:900px) {
        width: 50%;
    }

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
    font-size:6rem;
    font-family: "Yusei Magic", serif;
    font-weight: 10;
    font-style: normal;
    margin-bottom:1rem;

    @media (max-width:500px) {
        font-size:5rem;
    }
`
const About = styled.div`
    font-size:1.15rem;
`


export default function Home() {
  return (
    <ViewPort>
      <Container>
        <Heading>Hello!!</Heading>
        <About>
          こんにちは！
          このサイトでは私のこれまでの制作物や身につけたスキルをまとめています。
          少しでも私のことを知っていただけたら嬉しいです。
          どうぞごゆっくりご覧ください！
        </About>
      </Container>
    </ViewPort>
  );
}
