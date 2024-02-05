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
                        <BCSLogo src={BCSLogoImage} alt="No image."/>
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
                </TabLoginContainer>
            </Container>
        </FixedDiv>
    )

}

export default Tab;
const FixedDiv = styled.div `
    width:100%;
    position:fixed;
    font-family: sh_Bold;
    z-index:9999;
`;
const AdContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    height:50px;
    min-width:900px;
    background: linear-gradient(to right, rgb(255,152,152), white, rgb(0,153,255));
`;
const AdLink = styled.a `
    text-decoration: none;
`;
const AdSpan1 = styled.span `
    font-size:15px;
    color: black;
`;
const AdSpan2 = styled.span `
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
`;
const LogoContainer = styled.div`
    display:flex;
    position: relative;
    width:120px;
    height:50px;
    margin:auto;
    justify-content:center;
    align-items:center;
`;
const TabContainer = styled.div`
    display: flex; 
    position: relative;
    width: 60vw;
    margin: auto;
    min-width: 500px;
    height: 50px;
`;

const TabLoginContainer = styled.div`
    display: flex;
    position: relative;
    right: 0;
    top:5px;
    width: 400px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;
const BCSLogo = styled.img`
    position: relative;
    width:120px;
    height:40px;
    border-radius: 7.5px;
    cursor: pointer;
`
const TabLabel = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 150px;
    height:50px;
    justify-content: center;
    cursor: pointer;
    font-family: sh_Light;
    font-weight:600;
    color: rgb(0,153,255);
    min-width:60px;

    &: hover {
        color: blue;
        font-weight: bold;
        border-bottom: 3px solid blue;
    }
`;

const BtnConsult = styled.button`
    width:max(5vw,70px);
    border: none;
    height: 40px;
    border-radius: 5px;
    color: rgb(0,153,255);
    min-width:70px;
    font-family: sh_Light;
    font-weight: bold;
    background-color: transparent;

    &: hover {
        color: blue;
        font-family:sh_Bold;
        box-shadow: 1px 4px 1px 1px rgba(0, 0, 0, 0.05);
    }
`;
const BtnLogin = styled.button`
    width:max(5vw,70px);
    height: 40px;
    margin-left:10px;
    border-radius: 5px;
    border: 1px solid rgba(55, 155, 205, 0.5);
    font-family: sh_Light;
    font-weight: bold;
    color: rgb(0,153,255);
    

    &: hover {
        color: #3366CC;
        border: 1px solid blue;
        font-family:sh_Bold;
        box-shadow: 1px 4px 1px 1px rgba(0, 0, 0, 0.05);
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

    &: hover {
        background-color: blue;
        font-family:sh_Bold;
        box-shadow: 1px 4px 1px 1px rgba(0, 0, 0, 0.05);
    }
`;