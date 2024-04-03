import React from "react";

import Tab from '../pages/Tab';
import Center from "./Center";

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import IntroProject from "./IntroProject";
import MostPick from "./MostPick";
import ViewMap from "./ViewMap";

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

            <IntroProject/>

            <MostPick/>
            
            <ViewMap />
        </>
    )
}

export default MainStage;

const Banner = styled.div`
    width:100%;
    height:80px;
    z-index: 0;
`;

