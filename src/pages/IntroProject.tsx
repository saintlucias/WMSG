import React from 'react';
import styled from 'styled-components';
import FlagsIcon from '../images/Flags.png';
import '../css/font.css';
import KT from '../images/kt.webp';
import Mirae from '../images/mirae.webp';
import Samsung from '../images/Samsung.webp';
import Ediya from '../images/Ediya.webp';
import Hyundai from '../images/Hyundai.webp';
import SeoulUniv from '../images/Seouluniv.webp';

import Proj1 from '../images/proj-img-01.webp'
import Proj2 from '../images/proj-img-02.webp'
import Proj3 from '../images/proj-img-03.webp'
import Proj4 from '../images/proj-img-04.webp'
import Proj5 from '../images/proj-img-05.webp'
import Proj6 from '../images/proj-img-06.webp'

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
                    <ImgboxSamsung>
                        <Imgbox src={Samsung} alt="No image."/>
                    </ImgboxSamsung>
                    <Projimgbox>
                        <Projimg src={Proj1} alt="No image" />
                    </Projimgbox>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>금융·공공  ➲</Category>
                        <SubTitle>매출 성과 150%</SubTitle>
                    </PositionDiv>
                    <ImgboxMirae>
                        <Imgbox src={Mirae} alt="No image."/>
                    </ImgboxMirae>
                    <Projimgbox>
                        <Projimg src={Proj2} alt="No image" />
                    </Projimgbox>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>IT ➲</Category>
                        <SubTitle>150만 유저 이슈 처리</SubTitle>
                    </PositionDiv>
                    <ImgboxKt>
                        <Imgbox src={KT} alt="No image."/>
                    </ImgboxKt>
                    <Projimgbox>
                        <Projimg src={Proj3} alt="No image" />
                    </Projimgbox>
                </AdCompany>
            </CompanyContainer>
            <CompanyContainer>
                <AdCompany>
                    <PositionDiv>
                        <Category>건설 ➲</Category>
                        <SubTitle>매주 900분 창의적 작업</SubTitle>
                    </PositionDiv>
                    <ImgboxHyundai>
                        <Imgbox src={Hyundai} alt="No image."/>
                    </ImgboxHyundai>
                    <Projimgbox>
                        <Projimg src={Proj4} alt="No image" />
                    </Projimgbox>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>프랜차이즈 ➲</Category>
                        <SubTitle>전국 3,100개 매장 관리</SubTitle>
                    </PositionDiv>
                    <ImgboxEdiya>
                        <Imgbox src={Ediya} alt="No image."/>
                    </ImgboxEdiya>
                    <Projimgbox>
                        <Projimg src={Proj5} alt="No image" />
                    </Projimgbox>
                </AdCompany>
                <AdCompany>
                    <PositionDiv>
                        <Category>학교·교육  ➲</Category>
                        <SubTitle>회의 시간 60% 단축</SubTitle>
                    </PositionDiv>
                    <ImgboxSeoulUniv>
                        <Imgbox src={SeoulUniv} alt="No image."/>
                    </ImgboxSeoulUniv>
                    <Projimgbox>
                        <Projimg src={Proj6} alt="No image" />
                    </Projimgbox>
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


    @media (max-width: 1100px) {
        text-align: center;
     }
`;

const CompanyContainer = styled.div`
    display: flex;
    margin:auto;
    margin-top:20px;
    justify-content: center;

    @media (max-width: 1100px) {
        display: grid;
        margin-top:0px;
     }
    `;
const PositionDiv = styled.div`
    display:grid;
    width:auto;
    height:60px;
    margin-top: 25px;
    margin-left:20px;
    min-width:130px;
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

    @media (max-width: 1100px) {
        margin-bottom:20px;
     }
`;
const Imgbox = styled.img`
    width:max(150px,110px);
    height:60px;
`;
const ImgboxKt = styled.div` 
    height:60px;
    margin-left: 25px;
    margin-top:20px;
`;
const ImgboxMirae = styled.div`
    height:65px;
    margin-left: 35px;
    margin-top:15px;
`;
const ImgboxSamsung = styled.div`
    margin-top:17.5px;
    margin-left:25px;
    height:65px;
`;
const ImgboxHyundai = styled.div`
    margin-top: 17.5px;
    margin-left:30px;
    height:65px;
`;
const ImgboxEdiya = styled.div`
    margin-top: 17.5px;
    margin-left:25px;
    height:60px;
`;
const ImgboxSeoulUniv = styled.div`
    margin-top: 20px;
    margin-left:27.5px;
    height:65px;
`;
const Projimgbox = styled.div`
     position: absolute;
     margin-top:105px;
     margin-left:25px;
`; 
const Projimg = styled.img`
     width:300px;
     height:120px;
     border-radius: 5px;
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

    @media (max-width: 1100px) {
        margin-top:15px;
        font-size:25px;
     }

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
    cursor: pointer;

    &:hover {
        background-color:rgba(50, 183, 255, 1);
    }
`;
