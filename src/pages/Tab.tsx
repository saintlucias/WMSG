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
                <TabContainer>
                    <BCSLogo src={BCSLogoImage} alt="No image."></BCSLogo>
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
    position: fixed;
    font-family: sh_Bold;
`;
const AdContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    height:50px;
    min-width:900px;
    background: linear-gradient(to right, red, white, blue);
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
`;

const TabContainer = styled.div`
    display:flex; 
    margin: auto;
    min-width:600px;
    background-color:white;
    padding-top:15px;
    height: 50px;
`;
const TabLoginContainer = styled.div`
    display:flex;
    margin:auto;
    width:400px;
    height:50px;
    margin-left:30px;
    justify-content: center;
    align-items: center;

`;
const BCSLogo = styled.img`
    height:40px;
    border-radius: 7.5px;
    margin:auto;
    min-width:100px;
    margin-left:20px;
    margin-right:10px;
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

    color: blue;
    min-width:60px;

    &: hover {
        color: #3366CC;
        border-bottom: 3px solid blue;
    }
`;

const BtnConsult = styled.button`
    width:max(8vw,70px);
    border: none;
    height: 35px;
    border-radius: 5px;
    color: blue;
    min-width:70px;
    font-family: sh_Light;
    font-weight: bold;
    background-color: transparent;

    &: hover {
        color: #3366CC;
    }
`;
const BtnLogin = styled.button`
    width:max(8vw,70px);
    height: 35px;
    margin-left:10px;
    border-radius: 5px;
    border: 1px solid blue;
    font-family: sh_Light;
    font-weight: bold;
    color: blue;

    &: hover {
        color: #3366CC;
        border: 1px solid #3366CC;
    }
`;
const BtnRegistration = styled.button`
width:max(8vw,70px);
    height: 35px;
    border: none;
    margin-left:10px;
    border-radius: 5px;
    font-family: sh_Light;
    font-weight: 200;
    background-color: blue;
    color: white;

    &: hover {
        background-color: #3366CC;
    }
`;