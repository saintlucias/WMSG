import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AiBack4 from '../images/Ai_Back4.jpg';
import AiBack5 from '../images/Mediaback.jpg';
import AiBack6 from '../images/Mediaback2.jpg';

const Center: React.FC = () => {
    const [activeContainer, setActiveContainer] = useState(0);
    const totalContainers = 3;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNextClick = () => {
        setActiveContainer(prevActiveContainer => (prevActiveContainer + 1) % totalContainers);
        restartTimer();
    };

    const handlePrevClick = () => {
        setActiveContainer(prevActiveContainer => (prevActiveContainer + totalContainers - 1) % totalContainers);
        restartTimer();
    };

    const restartTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveContainer(prevActiveContainer => (prevActiveContainer + 1) % totalContainers);
        }, 7000);
    };

    useEffect(() => {
        restartTimer(); 
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); 
            }
        };
    }, []);

    const getTransformValue = () => {
        let translateValue = activeContainer * -33.33333;

        if (activeContainer === totalContainers) {
            translateValue = 0;
        }
        return `translateX(${translateValue}%)`;
    };

    return (
        <MainContainer>
            <ArrowLeft onClick={handlePrevClick}><strong>＜</strong></ArrowLeft>
            <SliderContainer>
                <ContentContainer style={{ transform: getTransformValue() }}>
                    <Container1>
                        <CntDiv>
                            <CntP>쉬운 협업툴</CntP>
                            <CntP>블루캡슐 AI에</CntP>
                            <CntP>메신저를 더하다.</CntP>
                            <CntSpan>메신저에 AI 를 더하여 더욱 효율적인 업무를 누리다.</CntSpan>
                        </CntDiv>
                    </Container1>
                    <Container2>
                        <CntDiv2>
                            <CntP>100대 기업 점유율 1위</CntP>
                            <CntP>구축형 AI 협업툴</CntP>
                            <CntSpan>더욱 효율적인 업무를 느껴보세요.</CntSpan>
                        </CntDiv2>
                    </Container2>
                    <Container3>
                        <CntDiv3>
                            <CntP>아 집에 가고싶어요.</CntP>
                            <CntP>칼퇴근이 마렵다.</CntP>
                            <CntSpan>더욱 칼같은 퇴근을 느껴보세요.</CntSpan>
                        </CntDiv3>
                    </Container3>
                </ContentContainer>
            </SliderContainer>
            <ArrowRight onClick={handleNextClick}><strong>＞</strong></ArrowRight>
            <PageIndicator>
                {Array.from({ length: totalContainers }).map((_, index) => (
                    <IndicatorDot key={index} className={activeContainer === index ? 'active' : ''} />
                ))}
            </PageIndicator>
        </MainContainer>
    );
};


export default Center;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top:35px;
    user-select: none;

`;

const SliderContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 850px; 
`;

const ContentContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 300%; 
`;

const Arrow = styled.div`
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px; 
    height: 60px; 
    border-radius: 50%; 
    font-size: 24px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5); 
    box-shadow: 0 2px 5px rgba(0,0,0,0.5); 
    transition: all 0.3s ease; 
`;

const ArrowLeft = styled(Arrow)`
    left: 20px;
    &:hover {
        color: rgba(0,53,255, 1); 
        background-color: rgba(204, 0, 51, 0.15);
        box-shadow: 0 0 10px rgba(204, 0, 51, 0.75);
    }
`;

const ArrowRight = styled(Arrow)`
    right: 20px;
    &:hover {
        color: rgba(0,103,255, 1); 
        background-color: rgba(204, 0, 51, 0.15);
        box-shadow: 0 0 10px rgba(204, 0, 51, 0.75);
    }
`;
const PageIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: White;
  }
`;

const Container1 = styled.div`
    width:100%;
    height:850px;
    opacity:1;
    background-image: url(${AiBack4});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100vw 900px;

`;
const Container2 = styled.div`
    width:100%;
    height:850px;
    opacity:1;
    background-image: url(${AiBack5});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100vw 900px;
`;
const Container3 = styled.div`
    width:100%;
    height:850px;
    opacity:1;
    background-image: url(${AiBack6});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100vw 900px;
`;

const CntDiv = styled.div`
    position: relative;
    width:max(30vw,420px);
    height:max(320px,150px);
    top:250px;
    left: 95px;
    background-color:rgba(0, 0, 0, 0.65);
    border-radius: 10px;

    @media (max-width: 900px) {
        display:grid;
        margin:auto;
        justify-content:center;
        align-items:center;
        left:0;
        width:420px;
        margin:auto;
     }
`;
const CntDiv2 = styled.div`
    position: relative;
    width:max(30vw,420px);
    height:max(250px,120px);
    top:280px;
    left: 95px;
    background-color:rgba(0, 0, 0, 0.65);
    border-radius: 10px;

    @media (max-width: 900px) {
        display:grid;
        margin:auto;
        justify-content:center;
        align-items:center;
        left:0;
        width:420px;
        margin:auto;
     }
`;
const CntDiv3 = styled.div`
    position: relative;
    width:max(30vw,420px);
    height:max(250px,100px);
    top:300px;
    left: 95px;
    background-color:rgba(0, 0, 0, 0.65);
    border-radius: 10px;

    @media (max-width: 900px) {
        display:grid;
        margin:auto;
        justify-content:center;
        align-items:center;
        left:0;
        width:420px;
        margin:auto;
     }
    `;

const CntP = styled.span`
    display:flex;
    position:relative;
    z-index:9998;
    flex-direction: column;
    font-family: sh_Bold;
    color: white;
    font-size:max(2.5vw, 35px);
    padding:15px;

    @media (max-width: 900px) {
        text-align:center;
     }
`;
const CntSpan = styled.span`
    display:flex;
    position:relative;
    font-family: sh_Light;
    z-index:9998;
    font-weight:600;
    color: white;
    font-size:max(1vw, 18px);
    padding:15px;
    

    @media (max-width: 900px) {
        margin:auto;
        text-align:center;
     }
`;
