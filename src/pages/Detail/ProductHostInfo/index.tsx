import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface HostDetailInfoProps {
  detailList: HostDetailType;
}

function HostDetailInfo({ detailList }: HostDetailInfoProps) {
  const { host_image, host, host_created } = detailList;

  return (
    <Container>
      <HostContactList>
        <ContactTime>
          <div>응답률: 96%</div>
          <div>응답 시간: 몇 시간 이내</div>
        </ContactTime>
        <HostContact>호스트에게 연락하기</HostContact>
        <ContactWarning>
          <WarningImg
            alt="warning"
            src="https://cdn-icons-png.flaticon.com/512/4884/4884863.png"
          ></WarningImg>
          <div>
            안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
            대화를 나누지 마세요.
          </div>
        </ContactWarning>
      </HostContactList>
    </Container>
  );
}

const Container = styled.div`
  ${flex('', '')};
  margin: 30px 0px;
`;

const HostContactList = styled.div`
  ${flex('center', '', 'column')};
`;

const ContactTime = styled.div`
  ${font(18, 500, 30)};
  color: ${colors.GRAY};
`;

const HostContact = styled.div`
  width: 50%;
  margin: 20px 0px;
  padding: 20px 0px;
  border: 1px solid ${colors.BLACK};
  border-radius: 10px;
  color: ${colors.BLACK};
  ${font(18, 400)}
  text-align: center;

  :hover {
    background-color: ${colors.LIGHTGRAY};
  }
`;

const ContactWarning = styled.div`
  ${flex('center', '')};
  width: 70%;
  ${font(15, 500, 18)};
  color: ${colors.GRAY};
`;

const WarningImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export default HostDetailInfo;
