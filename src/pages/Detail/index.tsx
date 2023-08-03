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

function Detail() {
  const [detailList, setDetailList] = useState<ProductDetailType>({
    name: '',
    description: '',
    district: '',
    neighberhood: '',
    price: 0,
    address: '',
    guests: 0,
    beds: 0,
    bedrooms: 0,
    baths: 0,
    latitute: 0,
    longitute: 0,
    host: '',
    host_image: '',
    host_created: '',
    room_images_url: [],
    check_in: [],
    room_amenities: [],
    check_in_time: '',
    check_out_time: '',
    house_rules: [],
    category: '',
  });

  const { room_images_url, description, room_amenities, house_rules, price } =
    detailList;

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
      <Header detailList={detailList} />
      <ProductImage room_images_url={room_images_url} />
      <Container>
        <ProductContainer>
          <ProductInfo detailList={detailList} />
          <ProductDescription>{description}</ProductDescription>
          <ProductAmenity room_amenities={room_amenities} />
          <Notice noticeList={house_rules} />
        </ProductContainer>
        <ReservationContainer>
          <Reservation data={price} />
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
