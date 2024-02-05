import React from "react";

import Tab from '../pages/Tab';
import Center from "./Center";

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MainStage: React.FC = () => {

    const navigate = useNavigate();

    const toAppPage = () => {
        return navigate('/App');
    }

    return (
        <>  
            <Banner>
                <Tab />
            </Banner>

            <Center />
            <AppContainer>
                <BtnMS onClick={toAppPage}>
                    App page
                </BtnMS>
            </AppContainer>
            <TestCon></TestCon>
            <TestCon></TestCon>
            <TestCon></TestCon>
        </>
    )
}

export default MainStage;

const Banner = styled.div`
    width:100%;
    height:80px;
    z-index: 0;
`;

const TestCon = styled.div`
    background-color: white;
    height:500px;
`;
const AppContainer = styled.div`
    display: grid;
    margin: auto;
    height: auto;
    justify-content: center;
`;

const BtnMS = styled.button`
    border: none;
    border-radius: 5px;
    width:100px;
    height:30px;
    font-weight: bold;

    color: white;
    background-color: rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: 0.15s;

        &:hover {
            background-color : rgba(205, 205, 205, 1);
            color:black;
            border-color: #aaa;
        }
`;