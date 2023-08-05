import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface PriceProps {
  netPrice: number;
  date: number;
}

function Price({ netPrice, date }: PriceProps) {
  if (date === 0) date = 1;

  const charge = netPrice * date * 0.22;
  const totalPrice = netPrice * date + charge;

  return (
    <>
      <ReservationNotice>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </ReservationNotice>
      <DayPrice>
        <div>
          ₩{netPrice.toLocaleString()} X {date}박
        </div>
        <div>₩{(netPrice * date).toLocaleString()}원</div>
      </DayPrice>
      <DayPrice>
        <div>네집내집 서비스 수수료</div>
        <div>₩{charge.toLocaleString()}원</div>
      </DayPrice>
      <TotalPrice>
        <div>총 합계</div>
        <div>₩{totalPrice.toLocaleString()}원</div>
      </TotalPrice>
    </>
  );
}

const ReservationNotice = styled.div`
  padding: 10px 0px 10px 0px;
  margin-bottom: 30px;
  ${font(18, 400)};
  color: ${colors.BLACK};
  text-align: center;
`;

const DayPrice = styled.div`
  ${flex('space-between', 'center')};
  padding: 20px 0px 10px 0px;
  ${font(18, 400)};
  text-decoration: underline;
`;

const TotalPrice = styled.div`
  ${flex('space-between', 'center')};
  margin-top: 20px;
  padding: 30px 0px 10px 0px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
  ${font(18, 600)};
`;

export default Price;
