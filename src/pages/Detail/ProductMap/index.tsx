import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { detailListState } from 'recoil/roomState';
import styled from 'styled-components';
import { colors, font } from 'styles';

function Map() {
  const [detailList, setDetailList] = useRecoilState(detailListState);

  const { latitute, longitute } = detailList;

  const containerStyle = {
    width: '1440px',
    height: '500px',
  };

  const center = {
    lat: latitute,
    lng: longitute,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const mapOptions = {
    zoom: 19, // initial zoom level
  };

  return isLoaded ? (
    <Container>
      <Title>호스팅 지역</Title>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        <MarkerF
          position={center}
          icon={{
            url: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
            scale: 3,
            scaledSize: new google.maps.Size(70, 70),
          }}
        />
      </GoogleMap>
    </Container>
  ) : (
    <div>Error</div>
  );
}

const Container = styled.div`
  margin: 20px 0px;
  padding: 30px 0px 50px 0px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const Title = styled.div`
  padding: 10px 0px;
  ${font(20, 500)};
  margin-bottom: 20px;
  color: ${colors.BLACK};
`;

export default React.memo(Map);
