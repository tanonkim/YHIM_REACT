import { useState } from 'react';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import Calendar from './Calender';
import PersonOption from './PersonOption';

interface ReservationProps {
  data: number;
}

function Reservation({ data }: ReservationProps) {
  const [date, setDate] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <div>
          <ReservationOptionInfo>
            <PriceInfo>
              ₩{data.toLocaleString()} <span>/박</span>
            </PriceInfo>
            <Review>
              <ReviewIcon
                alt="star"
                src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png"
              ></ReviewIcon>
              4.93 · 후기 210개
            </Review>
          </ReservationOptionInfo>
        </div>
        <Calendar setDate={setDate} />
        <PersonOption />
        <ReservationBtn>예약하기</ReservationBtn>
      </ContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 150px;
  margin-top: 30px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;
`;

const ContainerWrapper = styled.div`
  margin: 20px;
`;

const ReservationOptionInfo = styled.div`
  ${flex('space-between', 'center')};
  padding: 10px 0px 30px 0px;
`;

const PriceInfo = styled.div`
  ${font(25, 500)};
  color: ${colors.BLACK};
  span {
    ${font(22, 500)};
  }
`;

const Review = styled.div`
  ${font(20, 500, 20)};
  color: ${colors.BLACK};
`;

const ReviewIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

const ReservationBtn = styled.div`
  width: 100%;
  margin: 20px 10px 20px 0px;
  padding: 30px 15px;
  border-radius: 10px;
  background-color: ${colors.PINK};
  color: ${colors.WHITE};
  ${font(18, 400)};
  text-align: center;
  cursor: pointer;
`;

export default Reservation;
