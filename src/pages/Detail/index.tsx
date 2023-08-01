import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ProductImage from './ProductImage';
import styled from 'styled-components';
import { flex } from 'styles';
import ProductInfo from './ProductInfo';

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

  const { room_images_url } = detailList;

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
        </ProductContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${flex('', '')}
`;

const ProductContainer = styled.div`
  margin-right: 20px;
`;

export default Detail;
