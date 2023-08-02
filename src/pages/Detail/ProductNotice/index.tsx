import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface NoticeProps {
  noticeList: NoticeType[];
}

function Notice({ noticeList }: NoticeProps) {
  return (
    <Container>
      {noticeList.map((data, i) => (
        <NoticeContainer key={`notice-${i}}`}>
          <RuleList>
            <RuleImg alt="rule_icon" src={data.rules_icon_url} />
            <RuleContent>{data.room_rules}</RuleContent>
          </RuleList>
        </NoticeContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
`;

const NoticeContainer = styled.div`
  margin: 15px 0px;
`;

const RuleList = styled.div`
  ${flex('', 'center')}
  margin: 10px 0px;
`;
const RuleImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const RuleContent = styled.div`
  ${font(18, 500, 22)};
  color: ${colors.GRAY};
`;

export default Notice;
