import React, { useState } from 'react';
import styled from 'styled-components';


const MostPick: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    }

    return (
        <Container>
                <CenterSpan>가장 선호하는 기능 5가지</CenterSpan>
            <PositionContainer>
                <TabContainer>
                    <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>프로젝트</Tab>
                    <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>업무관리</Tab>
                    <Tab active={activeTab === 3} onClick={() => handleTabClick(3)}>메신저</Tab>
                    <Tab active={activeTab === 4} onClick={() => handleTabClick(4)}>히스토리</Tab>
                    <Tab active={activeTab === 5} onClick={() => handleTabClick(5)}>목표</Tab>
                </TabContainer>
                <Content>
                    {activeTab === 1 && <p>테스트 탭 1 인뎅</p>}
                    {activeTab === 2 && <p>집에</p>}
                    {activeTab === 3 && <p>가고싶어요</p>}
                    {activeTab === 4 && <p>개발시러</p>}
                    {activeTab === 5 && <p>쒸부랄</p>}
                </Content>
            </PositionContainer>
        </Container>
    );
}

export default MostPick;

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: rgba(0, 153, 255, 0.2);
`;

const PositionContainer = styled.div`
    display: grid;
    justify-content: center;
`;
const TabContainer = styled.div`
    margin-top:40px;
`;

const Tab = styled.button<{ active: boolean }>`
    font-family: sh_Light;
    font-weight: 600;
    width:180px;
    color: rgba(0,53,200, 1);
    font-size:16px;
    height:50px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-bottom: 5px solid ${props => props.active ? 'rgba(0,123,250, 1)' : 'rgba(0,53,200, 0.25)'};

`;

const Content = styled.div`
    width:auto;
    height:auto;
    margin-top:20px;
    border: 3px solid black;
`;

const CenterSpan = styled.span`
    display:flex;
    justify-content:center;
    font-family: sh_Bold;
    font-size:40px;
    color: rgba(0,53,200, 1);
    padding-top:150px;
`;