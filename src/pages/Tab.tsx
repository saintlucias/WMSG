import React from 'react';
import styled from 'styled-components';
import BCSLogoImage from '../images/bluecapsule.jpg';
import '../css/font.css';



const Tab: React.FC = () => {

    return (
        <FixedDiv>
            <AdLink href="https://www.naver.com/">
                <AdContainer>
                    <AdSpan1>오프라인 블루캡슐 설명회 참석 신청</AdSpan1>
                    <AdSpan2>바로가기</AdSpan2>
                </AdContainer>
            </AdLink>
            <Container>
                <LogoContainer>
                    <BCSLogo src={BCSLogoImage} alt="No image." />
                </LogoContainer>
                <TabContainer>
                    <TabLabel>기능</TabLabel>
                    <TabLabel>요금</TabLabel>
                    <TabLabel>팀 협업</TabLabel>
                    <TabLabel>강의실</TabLabel>
                    <TabLabel>프로모션</TabLabel>
                </TabContainer>
                <TabLoginContainer>
                    <BtnConsult>도입 문의</BtnConsult>
                    <BtnLogin>로그인</BtnLogin>
                    <BtnRegistration>회원가입</BtnRegistration>
                    <HamburgerIcon aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamburgerIcon>

                </TabLoginContainer>
            </Container>
        </FixedDiv>
    )

}

export default Tab;

const FixedDiv = styled.div`
    width:100%;
    position:fixed;
    font-family: sh_Bold;
    z-index:9999;
    user-select: none;
`;
const AdContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    height:50px;
    background: linear-gradient(to right, rgb(255,152,152), white, rgb(0,153,255));
`;
const AdLink = styled.a`
    text-decoration: none;
`;
const AdSpan1 = styled.span`
    font-size:15px;
    color: black;
`;
const AdSpan2 = styled.span`
    margin-left: 20px;
    font-size:17px;
    color:blue;
    text-decoration: underline;
`;
const Container = styled.div`
    display:flex;
    width:auto;
    height:60px;
    background-color:white;

    @media (max-width: 900px) {
       
    }
`;

{/* 로고 컨테이너 */ }

const LogoContainer = styled.div`
    display:flex;
    position: absolute;
    top: 55px;
    width:max(10vw,120px);
    left:1.5vw;
    height:50px;
    justify-content:center;
    align-items:center;

    @media (max-width: 900px) {
        
        left:3vw;
     }

`;
const BCSLogo = styled.img`
    position: relative;
    width:120px;
    height:40px;
    border-radius: 7.5px;
    min-width:100px;
    cursor: pointer;
`;

{/* 가운데 부분 버튼 컨테이너 */ }

const TabContainer = styled.div`
    display: flex; 
    position: absolute;
    top:55px;
    left:max(13vw,137px);
    width: 56vw;
    margin: auto;
    min-width: 350px;
    height: 50px;

    @media (max-width: 900px) {
        display: none; 
    }
`;
const TabLabel = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 11vw;
    height:50px;
    justify-content: center;
    cursor: pointer;
    font-family: sh_Light;
    font-weight:600;
    color: rgb(0,153,255);
    min-width:18%;

    &: hover {
        color: rgba(0,53,255, 1);
        font-weight: bold;
        border-bottom: 3px solid rgba(0,153,255, 0.5);
    }
    
`;

{/* 문의 로그인 회원가입 버튼 컨테이너 */ }

const TabLoginContainer = styled.div`
    display: flex;
    position: absolute;
    top:55px;
    right:0.5vw;
    width: 20vw;
    height: 50px;
    justify-content: center;
    align-items: center;
    min-width:240px;
    @media (max-width: 900px) {
        position:absolute;
        top:55px;
        right:1vw;
        width: auto;
     }
`;
const BtnConsult = styled.button`
    width:max(5vw,70px);
    border: 2px solid transparent;
    height: 40px;
    color: rgb(0,153,255);
    min-width:70px;
    font-family: sh_Light;
    font-weight: bold;
    background-color: transparent;
    cursor:pointer;

    &: hover {
        color: rgba(0,53,255, 0.8);
        font-family:sh_Bold;
        border-bottom:2px solid rgb(0,153,255);
    }

    @media (max-width: 900px) {
        display: none; 
    }
`;
const BtnLogin = styled.button`
    width:max(5vw,70px);
    height: 40px;
    margin-left:10px;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: white;
    font-family: sh_Light;
    font-weight: bold;
    color: rgb(0,153,255);
    cursor:pointer;
    

    &: hover {
        color: rgba(0,53,255, 0.8);
        border: 1px solid rgb(0,153,255);
        font-family:sh_Bold;
    }
    @media (max-width: 900px) {
        position:relative;
        width:100px;
        height:30px;
    }
`;
const BtnRegistration = styled.button`
    width:max(5vw,70px);
    height: 40px;
    border: none;
    margin-left:10px;
    border-radius: 5px;
    font-family: sh_Light;
    font-weight: 200;
    background-color: rgb(0,153,255);
    color: white;
    cursor:pointer;

    &: hover {
        background-color: rgba(0,53,255, 0.8);
        font-family:sh_Bold;
    }
    @media (max-width: 900px) {
        position:relative;
        width:100px;
        height:30px;
    }
`;

const HamburgerIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #333;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }

  @media (max-width: 900px) {
    display: flex;
    margin-left: 10px;
  }
`;