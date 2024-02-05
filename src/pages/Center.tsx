import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../css/font.css';
// import AiBack from '../images/AI_back.jpg';
// import AiBack2 from '../images/Ai_Back2.jpg';
// import AiBack3 from '../images/Ai_Back3.png';
import AiBack4 from '../images/Ai_Back4.jpg';




const Center: React.FC = () => {

    return (
        <Container>
            {/* <ImageDiv>
                    <Image1 src={AiBack} alt="No image." />
                    <Image2 src={AiBack2} alt="No image." />
                    <Image3 src={AiBack3} alt="No image." />
            </ImageDiv> */}
            <CntDiv>
                <CntP>쉬운 협업툴</CntP>
                <CntP>블루캡슐 AI에</CntP>
                <CntP>메신저를 더하다.</CntP>
                <br></br>
                <CntSpan>모이면 대충 더 큰 목표를 얻을 수 있다는 내용</CntSpan>
            </CntDiv>
        </Container>
    );
}

export default Center;

const Container = styled.div`
    width:100%;
    height:850px;
    margin-top:40px;
    min-width:1500px;
    opacity:0.85;
    background-image: url(${AiBack4});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: 100vw 900px;
`;

const CntDiv = styled.div`
    position: relative;
    width:400px;
    height:270px;
    top:200px;
    left: 80px;
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



// const fadeInOut = keyframes`
//     0% {
//         opacity: 1;
//     }
//     25% {
//         opacity: 0.75;
//     }
//     50% {
//         opacity: 0.25;
//     }
//     75% {
//         opacity: 0.75;
//     }
//     95% {
//         opacity: 0.9;
//     }
//     100% {
//         opacity: 1;
//     }
// `;

// const ImageDiv = styled.div`
//     position: relative;
//     top:90px;
// `;
// const Image1 = styled.img`
//     position: absolute;
//     z-index:1;
//     width:500px;
//     height:300px;
//     opacity: 1;
//     right:125px;
//     min-width: 300px;
//     min-height:200px;
//     border-radius: 10px;
//     animation: ${fadeInOut} 12s linear infinite;
// `;
// const Image2 = styled.img`
//     position: absolute;
//     z-index:1;
//     width:520px;
//     height:300px;
//     opacity: 1;
//     right:750px;
//     top:400px;
//     min-width: 300px;
//     min-height:200px;
//     border-radius: 10px;
//     animation: ${fadeInOut} 15s linear infinite;
// `;
// const Image3 = styled.img`
//     position: absolute;
//     z-index:0;
//     right:300px;
//     top:20px;
//     width:700px;
//     height:700px;
//     opacity: 0.8;
//     min-width: 500px;
//     min-height:200px;
//     border-radius: 10px;
//     // animation: ${fadeInOut} 9s linear infinite;
// `;
