import React from 'react';
import styled from 'styled-components';

const AdBanner: React.FC = () => {

    return (
        <>
            <AdLink href="https://www.naver.com/">
                <AdContainer>
                    <AdSpan1>오프라인 블루캡슐 설명회 참석 신청</AdSpan1>
                    <AdSpan2>바로가기</AdSpan2>
                </AdContainer>
            </AdLink>
        </>
    );

}

export default AdBanner;

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
    font-weight: bold;
    font-size:16px;
    color: black;
`;
const AdSpan2 = styled.span `
    margin-left: 20px;
    font-weight:bold;
    font-size:19px;
    color:blue;
    text-decoration: underline;

`;


// const AdContainer = styled.div`
//     width: 100vw;
//     height: 50px;
//     background-image: url(${adword});
//     background-size: 100vw 150px;
//     cursor: pointer;
// `;

