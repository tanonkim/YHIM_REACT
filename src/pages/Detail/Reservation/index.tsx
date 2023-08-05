import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { subDays } from 'date-fns';
import { colors, flex, font } from 'styles';
import Calendar from './Calender';
import PersonOption from './PersonOption';
import Price from './Price';
import { useNavigate, useParams } from 'react-router-dom';
import { getToken } from 'utils/jwt';

interface ReservationProps {
  netPrice: number;
}

function Reservation({ netPrice }: ReservationProps) {
  const [date, setDate] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(new Date()); // 예약 시작일
  const [endDate, setEndDate] = useState<Date | null>(subDays(new Date(), -1)); // 예약 종료일
  const [guest, setGuest] = useState<number>(1); // 총 예약인원

  const formatDate = (date: Date) => {
    // 2023-2-2 => 2023-02-02
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const params = useParams();
  const navigate = useNavigate();

  const goReservation = async () => {
    const token = getToken();

    if (!token) {
      alert('로그인을 해주세요.');
      return navigate('/signin');
    }
    if (token) {
      const res = await fetch(
        `${process.env.REACT_APP_API_ADDRESS}/rooms/${params.id}/reservations/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: token,
          },
          body: JSON.stringify({
            check_in: startDate ? formatDate(startDate) : null,
            check_out: endDate ? formatDate(endDate) : null,
            guests: guest,
          }),
        },
      );

      const { message } = await res.json();

      if (message === 'NO_WAY_TO_BOOK_BEFORE_TODAY') {
        return alert('정확한 시작 일정을 선택해주세요.');
      }
      if (message === 'INVALID_BOOKING_DATE') {
        return alert('정확한 일정을 선택해주세요.');
      }
      if (message === 'DOUBLE_BOOKED_FOR_THE_DAY') {
        return alert('중복예약은 불가능합니다.');
      }
      if (message === 'EXCESSIVE_NUMBER_OF_PEOPLE') {
        return alert('정원초과입니다.');
      }
      if (message === 'RESERVATION_NOT_AVAILABLE') {
        return alert('예약일정이 없습니다. 호스트에게 연락해주세요.');
      }
      if (message === 'INAVAILABLE_DATE') {
        return alert('실행초과 오류입니다. 반복될 경우 관리자에게 알려주세요.');
      }
      if (message === 'VALUE_ERROR') {
        return alert('올바른 값을 넣어주세요.');
      }
      if (message === 'SUCCESS') {
        return alert('예약이 완료되었습니다.');
      }
      if (
        message === 'NO AUTHORIZATION IN HEADER' ||
        'INVALID_USER' ||
        'EXPIRED_TOKEN' ||
        'INVALID_TOKEN'
      ) {
        alert('로그인이 필요합니다.');
        return navigate('/signin');
      }
    }
  };

  return (
    <Container>
      <ContainerWrapper>
        <div>
          <ReservationOptionInfo>
            <PriceInfo>
              ₩{netPrice.toLocaleString()} <span>/박</span>
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
        <Calendar
          setDate={setDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <PersonOption setGuest={setGuest} />
        <ReservationBtn onClick={goReservation}>예약하기</ReservationBtn>
        <Price netPrice={netPrice} date={date} />
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
