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
                    <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>감스트</Tab>
                    <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>적재 - 새벽통화</Tab>
                    <Tab active={activeTab === 3} onClick={() => handleTabClick(3)}>힛뜨TV</Tab>
                    <Tab active={activeTab === 4} onClick={() => handleTabClick(4)}>블루캡슐</Tab>
                    <Tab active={activeTab === 5} onClick={() => handleTabClick(5)}>참돔 키우기</Tab>
                </TabContainer>
                <Content>
                    {
                        activeTab === 1 && 
                            <iframe 
                                width="100%" 
                                height="600px" 
                                src="https://www.youtube.com/embed/2hpgR9hxEPw?autoplay=1" 
                                title="감스트 손흥민vs이강인 싸웠다? 축협의 시선돌리기 역겹습니다.." 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            />
                    }
                    {
                        activeTab === 2 && 
                            <iframe 
                            width="100%" 
                            height="600px" 
                            src="https://www.youtube.com/embed/XjdAJ5Oy-AQ?autoplay=1" 
                            title="Midnight Call" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen 
                        />
                    }
                    {
                        activeTab === 3 && 
                            <iframe 
                                width="100%" 
                                height="600px" 
                                src="https://www.youtube.com/embed/f_OtDKCf-l4?autoplay=1" 
                                title="도심속 하천에 이런 게...!? 생각지도 못했습니다" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen 
                            />
                    }
                    {
                        activeTab === 4 && 
                            <iframe 
                                width="100%" 
                                height="600px" 
                                src="https://www.youtube.com/embed/IMADQ0jqCtg?autoplay=1" 
                                title="블루캡슐 배정인 이사 인터뷰" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen 
                            />
                    }
                    {
                        activeTab === 5 && 
                            <iframe 
                                width="100%" 
                                height="600px" 
                                src="https://www.youtube.com/embed/8lYXx4_CUEg?autoplay=1" 
                                title="1000배로 커지는 초대형어 참돔을 집에서 7개월간 키우면 생기는 일... ㄷㄷ" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen 
                            />
                    }
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

`;

const CenterSpan = styled.span`
    display:flex;
    justify-content:center;
    font-family: sh_Bold;
    font-size:40px;
    color: rgba(0,53,200, 1);
    padding-top:150px;
`;