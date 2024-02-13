import React from 'react';
import styled from 'styled-components';
import FlagsIcon from '../images/Flags.png';
import '../css/font.css';
import KT from '../images/kt.webp';
import Mirae from '../images/mirae.webp';


const IntroProject: React.FC = () => {

    return (
        <IntroContainer>
            <SetContainer>
                <FlagsIconImage src={FlagsIcon} alt="No image." />
                <Normalspan>대충 전 세계 회사에서 프로젝트 존나게 생성하고 있다는 내용</Normalspan>
                <GoProjectBtn>팀 별 프로젝트 확인하기　➔</GoProjectBtn>
            </SetContainer>
            <CompanyContainer>
                <AdCompany>
                    <PositionDiv>
                        <Category>제조·유통  ➲</Category>
                        <SubTitle>업무 자동화 20%</SubTitle>
                    </PositionDiv>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>금융·공공  ➲</Category>
                        <SubTitle>매출 성과 150%</SubTitle>
                    </PositionDiv>
                    <ImgboxMirae>
                        <Imgbox src={Mirae} alt="No image."/>
                    </ImgboxMirae>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>IT ➲</Category>
                        <SubTitle>150만 유저 이슈 처리</SubTitle>
                    </PositionDiv>
                    <Imgsbox>
                        <Imgbox src={KT} alt="No image."/>
                    </Imgsbox>
                </AdCompany>
            </CompanyContainer>
            <CompanyContainer>
                <AdCompany>
                    <PositionDiv>
                        <Category>건설 ➲</Category>
                        <SubTitle>매주 900분 창의적 작업</SubTitle>
                    </PositionDiv>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>프랜차이즈 ➲</Category>
                        <SubTitle>전국 3,100개 매장 관리</SubTitle>
                    </PositionDiv>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>학교·교육  ➲</Category>
                        <SubTitle>회의 시간 60% 단축</SubTitle>
                    </PositionDiv>
                </AdCompany>
            </CompanyContainer>
        </IntroContainer>
    );
}

export default IntroProject;

const IntroContainer = styled.div`
    width:100%;
    height:1000px; 
    position: absolute;
    user-select: none;
`;

const SetContainer = styled.div`
    display:grid;
    margin-top: 100px;
    margin-bottom: 60px;
`;

const CompanyContainer = styled.div`
    display: flex;
    margin:auto;
    margin-top:20px;
    justify-content: center;
    `;
const PositionDiv = styled.div`
    display:grid;
    width:auto;
    height:60px;
    margin-top: 25px;
    margin-left:20px;
`;
const AdCompany = styled.div`
    display: flex;
    width:350px;
    height:250px;
    background-color:rgba(50, 153, 255, 0.2);
    border-radius:4px;
    border: 1px ridge transparent;
    cursor: pointer;
    margin-right:10px;
    margin-left:10px;
    min-width: 250px;

    &:hover {
        border: 1px ridge rgba(50, 183, 255, 0.55);
        background-color:rgba(50, 183, 255, 0.25);
        color:rgba(50, 53, 255, 1);
    }
`;
const Imgsbox = styled.div` 
    position:relative;
    height:60px;
    top:20px;
    left:40px;

`;
const Imgbox = styled.img`
    height:65px;
`;
const ImgboxMirae = styled.div`
    position: relative;
    top:15px;
    left:75px;
    height:65px;
`;

const FlagsIconImage = styled.img`
    width:300px;
    height:50px;
    margin:auto;
    margin-bottom: 20px;
`;

const Normalspan = styled.span`
    font-family: sh_Bold;
    font-size : 35px;
    color: rgba(0,53,200, 1);
    margin:auto;
    margin-bottom:40px;
`;
const Category = styled.span`
    font-family: sh_Bold;
    font-size: 19px;
`;
const SubTitle = styled.span`
    font-family: sh_Light;
    font-size:14px;
    font-weight: 600;
`;

const GoProjectBtn = styled.button`
    margin:auto;
    width: 300px;
    height:50px;
    border-radius: 5px;
    font-family: sh_Bold;
    font-size: 17px;
    border: none;
    color:white;
    background-color: rgb(20,123, 255);

    &:hover {
        background-color:rgba(50, 183, 255, 1);
    }
`;
