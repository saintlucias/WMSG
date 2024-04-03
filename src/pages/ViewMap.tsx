import React, { useEffect, useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import '../css/font.css';

declare global {
    interface Window {
        kakao: any;
    }
}

const GlobalStyle = createGlobalStyle`
    .IntroDiv {
        display:flex;
        margin:auto;
        justify-content:center;
        align-items:center;
        font-family: sh_Light;
        font-weight:600;
        width:150px;
        height:30px;
    }
`

const ViewMap: React.FC = () => {

    const [isKakaoMapLoaded, setKakaoMapLoaded] = useState(false);

    useEffect(() => {
        setKakaoMapLoaded(true);

        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(35.1514128, 126.9147736),
            level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
            position: options.center,
            map: map
        });

        // 정보 창 생성
        const infowindow = new window.kakao.maps.InfoWindow({
            content: '<div class="IntroDiv">블루캡슐</div>'
        });

        // 마커에 마우스를 올렸을 때 이벤트
        window.kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
        });

        // 마커에서 마우스가 벗어났을 때 이벤트
        window.kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });
    }, []);

    return (
        <>
            <GlobalStyle/>
            <MapContainer id="map">

            </MapContainer>
        </>

    );
}

export default ViewMap;

const MapContainer = styled.div`
    width:800px;
    height:600px;
`;

