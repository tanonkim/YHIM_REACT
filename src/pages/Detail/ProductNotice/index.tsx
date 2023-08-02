import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import NoticeContent from './NoticeContent';

interface NoticeProps {
  noticeList: NoticeType[];
}

function Notice({ noticeList }: NoticeProps) {
  return (
    <Container>
      {noticeList.map((data, i) => (
        <NoticeContent key={`notice-${i}}`} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
`;

export default Notice;
