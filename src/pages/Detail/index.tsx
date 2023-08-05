import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ProductImage from './ProductImage';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import ProductInfo from './ProductInfo';
import ProductAmenity from './ProductAmenity';
import Notice from './ProductNotice';
import Map from './ProductMap';
import HostDetailInfo from './ProductHostInfo';
import Reservation from './Reservation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { descriptionState, detailListState } from 'recoil/roomState';

function Detail() {
  const [detailList, setDetailList] = useRecoilState(detailListState);
  const description = useRecoilValue(descriptionState);

  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ADDRESS}/rooms/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailList(data.message);
      });
  }, [params.id]);

  return (
    <>
      <Header />
      <ProductImage />
      <Container>
        <ProductContainer>
          <ProductInfo />
          <ProductDescription>{description}</ProductDescription>
          <ProductAmenity />
          <Notice />
        </ProductContainer>
        <ReservationContainer>
          <Reservation />
        </ReservationContainer>
      </Container>
      <Map detailList={detailList} />
      <HostDetailInfo detailList={detailList} />
    </>
  );
}

const Container = styled.div`
  ${flex('', '')}
`;

const ProductContainer = styled.div`
  margin-right: 20px;
`;

const ProductDescription = styled.div`
  width: 960px;
  padding: 40px 0;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(18, 500, 25)};
  color: ${colors.BLACK};
`;

const ReservationContainer = styled.div`
  margin-left: 20px;
`;

export default Detail;
