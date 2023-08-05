import styled from 'styled-components';
import { colors } from 'styles';
import NoticeContent from './NoticeContent';
import { useRecoilValue } from 'recoil';
import { houseRulesState } from 'recoil/roomState';

function Notice() {
  const noticeList = useRecoilValue(houseRulesState);

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
