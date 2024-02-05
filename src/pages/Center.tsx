import React, { useState } from 'react';
import styled from 'styled-components';
import AiBack4 from '../images/Ai_Back4.jpg';
import AiBack5 from '../images/Ai_Back5.jpg';

const Center: React.FC = () => {
    const [activeContainer, setActiveContainer] = useState(0);
    const [direction, setDirection] = useState('');
    const [startX, setStartX] = useState(0);
    const [dragging, setDragging] = useState(false);
    

    const nextContainer = () => {
        setActiveContainer((prevActiveContainer) => (prevActiveContainer + 1) % 2);
        setDirection('right');
    };

    const prevContainer = () => {
        setActiveContainer((prevActiveContainer) => (prevActiveContainer - 1 + 2) % 2);
        setDirection('left');
    };

    const handleMouseDown = (e: any) => {
        setStartX(e.clientX);
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e: any) => {
        if (!dragging) return;

        const moveX = e.clientX - startX;
        if (moveX > 0) {
            // 왼쪽으로 드래그
            setActiveContainer((prevActiveContainer) => (prevActiveContainer - 1 + 2) % 2);
        } else if (moveX < 0) {
            // 오른쪽으로 드래그
            setActiveContainer((prevActiveContainer) => (prevActiveContainer + 1) % 2);
        }
        setStartX(e.clientX); // 드래그가 지속될 경우를 위해 현재 위치 업데이트
    };

    const getTransformValue = () => {
        const translateValue = activeContainer * -50; // 각 컨테이너가 전체 화면 너비를 차지한다고 가정
        return `translateX(${translateValue}%)`;
    };
    {/* 마우스 이벤트 업데이트 필요함. */}

    return (
        <MainContainer
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
            <ArrowLeft onClick={prevContainer}>＜</ArrowLeft>
            <SliderContainer>
                <ContentContainer style={{ transform: getTransformValue() }}>
                    <Container1>
                        <CntDiv>
                            <CntP>쉬운 협업툴</CntP>
                            <CntP>블루캡슐 AI에</CntP>
                            <CntP>메신저를 더하다.</CntP>
                            <br></br>
                            <CntSpan>메신저에 AI 를 더하여 더욱 효율적인 업무를 누리다.</CntSpan>
                        </CntDiv>
                    </Container1>
                    <Container2>
                        <CntDiv>
                            <CntP>100대 기업 점유율 1위</CntP>
                            <CntP>AI Assistant</CntP>
                            <br></br>
                            <CntSpan>더욱 효율적인 업무를 느껴보세요.</CntSpan>
                        </CntDiv>
                    </Container2>
                </ContentContainer>
            </SliderContainer>
            <ArrowRight onClick={nextContainer}>＞</ArrowRight>
        </MainContainer>
    );
};


export default Center;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

`;

const SliderContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 850px; 
`;

const ContentContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 200%; 
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
        color: rgb(0, 153, 200); 
        background-color: rgba(0, 153, 255, 0.15); 
        box-shadow: 0 0 10px rgba(0, 153, 255, 0.7);
    }
`;

const ArrowRight = styled(Arrow)`
    right: 20px;
    &:hover {
        color: rgb(0, 153, 200); 
        background-color: rgba(0, 153, 255, 0.15);
        box-shadow: 0 0 10px rgba(0, 153, 255, 0.7);
    }
`;

const Container1 = styled.div`
    width:100%;
    height:850px;
    opacity:0.85;
    background-image: url(${AiBack4});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: 100vw 900px;
`;
const Container2 = styled.div`
    width:100%;
    height:850px;
    opacity:0.85;
    background-image: url(${AiBack5});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: 100vw 900px;
`;


const CntDiv = styled.div`
    position: relative;
    width:500px;
    height:270px;
    top:250px;
    left: 100px;
    `;


const CntP = styled.span`
    display:flex;
    position:relative;
    z-index:9998;
    flex-direction: column;
    font-family: sh_Bold;
    color: white;
    font-size:max(50px, 30px);
    padding:15px;
`;
const CntSpan = styled.span`
    position:relative;
    font-family: sh_Light;
    z-index:9998;
    font-weight:600;
    color: white;
    font-size:max(20px, 18px);
    padding:15px;
`;
