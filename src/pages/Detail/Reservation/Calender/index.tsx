import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { subDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

interface CalendarProps {
  setDate: Function;
  setStartDate: Function;
  setEndDate: Function;
}

function Calendar(props: CalendarProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(subDays(new Date(), -1));
  const [totalDate, setTotalDate] = useState(1);

  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      const date = endDate.getTime() - startDate.getTime();
      setTotalDate(props.setDate(Math.ceil(date / 86400000)));
      props.setStartDate(startDate);
      props.setEndDate(endDate);
    }
  }, [startDate, endDate]);

  return (
    <Container>
      <DateContainer>
        <DateTitle>체크인</DateTitle>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          startDate={startDate}
          minDate={new Date()}
          locale={ko}
          showPopperArrow={false}
          dateFormat="yyyy.MM.dd (eee)"
          dateFormatCalendar={'yyyy년 MM월'}
        />
      </DateContainer>
      <DateContainer>
        <DateTitle>체크아웃</DateTitle>
        <DatePicker
          selected={
            new Date().getMonth() === endDate?.getMonth() &&
            new Date().getDate() === endDate?.getDate()
              ? subDays(new Date(), -1)
              : endDate
          }
          onChange={(date: Date | null) => setEndDate(date)}
          startDate={subDays(new Date(), -1)}
          minDate={subDays(new Date(), -1)}
          locale={ko}
          showPopperArrow={false}
          dateFormat="yyyy.MM.dd (eee)"
          dateFormatCalendar="yyyy년 MM월"
        />
      </DateContainer>
    </Container>
  );
}

const Container = styled.div`
  ${flex('', '')};
  width: 100%;
`;

const DateContainer = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  :first-child {
    border-top-right-radius: 0px;
    border-right: 0px;
  }
  :last-child {
    border-top-left-radius: 0px;
  }
`;

const DateTitle = styled.div`
  ${font(13, 500)};
  padding: 10px 0px;
`;

export default Calendar;
