import {useState,useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:4rem;
    display:flex;
    align-items:center;
    background-color:white;
`;

const Title = styled.h1`
    flex:3;
    font-size:2rem;
    margin: 0 auto;
    width:100%;
    text-align:center;
    font-family: "Yusei Magic", serif;
    font-weight: 400;
    font-style: normal;
`;

const TopbarItems = styled.div`
    flex:9;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly
`

const TopbarItem = styled.a`
    font-size:1rem;
    font-weight:700;
    color:black;
    text-decoration:none;
    cursor: pointer;
    &:hover {
        color:rgb(120, 120, 120);
    }
`

const Menubar = styled.span`
    position:fixed;
    left:2rem;
    cursor: pointer;
`

const Sidebar = styled.div`
    position:fixed;
    height:100%;
    top:0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-18rem")};
    width:16rem;
    background-color:white;
    z-index:1001;
    transition: left 0.3s ease;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const SidebarTop = styled.h1`
    margin-top:3rem;
    margin-bottom:3rem;
    font-family: "Yusei Magic", serif;
    font-weight: 400;
    font-style: normal;
`

const SidebarItem = styled.a`
    width: 12rem;
    border-bottom:1px solid black;
    padding-bottom:0.1rem;
    color:black;
    text-decoration:none;
    margin-bottom:2rem;
    cursor: pointer;
`

const Overlay = styled.div`
    position:fixed;
    width:100%;
    height: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`


export default function Topbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            section: "Top",
            link: "#top"
        },
        {
            section: "Profile",
            link: "#profile"
        },
        {
            section: "Works",
            link: "#works"
        },
        {
            section: "Skills",
            link: "#skills"
        },
    ];

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    if (windowWidth < 1000) {
        return (
            <>
                <Container>
                    <Title>Portfolio</Title>
                    <Menubar onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></Menubar>
                </Container>
                <Sidebar isOpen={isOpen}>
                    <SidebarTop>Menu</SidebarTop>
                    {items.map((item) => {
                        return <SidebarItem onClick={toggleMenu} href={item.link}>{item.section}</SidebarItem>
                    })}
                </Sidebar>
                <Overlay isOpen={isOpen} onClick={toggleMenu}></Overlay>
            </>
        );
    }

    return (
        <Container>
            <Title>Portfolio</Title>
            <TopbarItems>
                {items.map((item) => {
                        return <TopbarItem href={item.link}>{item.section}</TopbarItem>
                    })}
            </TopbarItems>
        </Container>
    );
}
