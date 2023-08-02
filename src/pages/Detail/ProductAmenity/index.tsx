import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface ProductAmenityProps {
  room_amenities: AmenityType[];
}

function ProductAmenity({ room_amenities }: ProductAmenityProps) {
  return (
    <Container>
      <Title>숙소 편의시설</Title>
      {room_amenities.slice(0, 10).map((data, i) => (
        <AmenityItem key={`amenity-${i}}`}>
          <AmenityIcon alt={data.amenity_name} src={data.amenity_icon_url} />
          <AmenityName>{data.amenity_name}</AmenityName>
        </AmenityItem>
      ))}
      <TotalListBtn>편의시설 45개 모두 보기</TotalListBtn>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0px 25px 0px;
`;

const Title = styled.div`
  grid-column: 1/3;
  padding: 10px 0px 10px 0px;
  margin: 20px 0px 20px 0px;
  ${font(20, 500)};
`;

const AmenityItem = styled.div`
  ${flex('', 'center')}
  width: 100%;
  padding-bottom: 16px;
`;

const AmenityIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const AmenityName = styled.p`
  margin-top: 4px;
  ${font(18, 500)};
`;

const TotalListBtn = styled.button`
  width: 70%;
  margin: 20px 0px 0px 0px;
  padding: 20px 0px;
  border: 1px solid ${colors.BLACK};
  border-radius: 10px;
  color: ${colors.BLACK};
  ${font(18, 400)}
`;

export default ProductAmenity;
