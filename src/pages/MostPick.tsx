import React from 'react';
import styled from 'styled-components';
import '../css/font.css';

const MostPick: React.FC = () => {
    return(

        <Container>
            <CenterSpan>가장 선호하는 기능 5가지</CenterSpan>

        </Container>
    )
}

export default MostPick;

const Container = styled.div`
    display:flex;
    width:100%;
    height:1000px;
    background-color:rgba(0, 153, 255, 0.2);
    margin: auto;
    justify-content:center;
    align-items:center;
`;  

const CenterSpan = styled.span`
    font-family: sh_Bold;
    font-size:35px;
    color: rgba(0,53,200, 1);
`;