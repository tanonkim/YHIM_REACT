import { useState } from 'react';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface CountClientProps {
  setGuest: (guest: number) => void;
}

function CountClient({ setGuest }: CountClientProps) {
  const [count, setCount] = useState({
    adult: 1,
    child: 0,
    baby: 0,
    pet: 0,
  });

  return (
    <Container>
      <ContainerWrapper>
        <OptionList>
          <Option>
            <div>
              <OptionTitle>성인</OptionTitle>
              <div>만 13세 이상</div>
            </div>
            <BtnContainer>
              <Button name="adult" type="button">
                -
              </Button>
              <Count>{count.adult}</Count>
              <Button name="adult" type="button">
                +
              </Button>
            </BtnContainer>
          </Option>
          <Option>
            <div>
              <OptionTitle>어린이</OptionTitle>
              <div>만 2~12세</div>
            </div>
            <BtnContainer>
              <Button name="child" type="button">
                -
              </Button>
              <Count>{count.child}</Count>
              <Button name="child" type="button">
                +
              </Button>
            </BtnContainer>
          </Option>
          <Option>
            <div>
              <OptionTitle>유아</OptionTitle>
              <div>만 2세 미만</div>
            </div>
            <BtnContainer>
              <Button name="baby" type="button">
                -
              </Button>
              <Count>{count.baby}</Count>
              <Button name="baby" type="button">
                +
              </Button>
            </BtnContainer>
          </Option>
          <Option>
            <div>
              <OptionTitle>반려동물</OptionTitle>
              <div>반려동물을 동반하시나요?</div>
            </div>
            <BtnContainer>
              <Button name="pet" type="button">
                -
              </Button>
              <Count>{count.pet}</Count>
              <Button name="pet" type="button">
                +
              </Button>
            </BtnContainer>
          </Option>
        </OptionList>
        <Notice>
          이 숙소의 최대 숙박 인원은 4명(유아 포함)입니다. 반려동물 동반은
          허용되지 않습니다.
        </Notice>
        <Exit>닫기</Exit>
      </ContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 232px;
  left: 20px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;
`;

const ContainerWrapper = styled.div`
  padding: 20px;
`;

const OptionList = styled.div`
  margin-bottom: 40px;
`;

const Option = styled.form`
  ${flex('space-between', 'center')};
  margin: 10px 0px 25px 0px;
`;

const OptionTitle = styled.div`
  padding: 10px 0px 15px 0px;
  ${font(18, 600)};
`;

const Notice = styled.div`
  width: 360px;
`;

const BtnContainer = styled.div`
  ${flex('', 'center')};
  ${font(18, 400)}
`;

const Button = styled.button`
  padding: 7px 10px 7px 10px;
  margin-right: 40px;
  border: 1px solid ${colors.GRAY};
  border-radius: 50%;
  cursor: pointer;

  :last-child {
    margin-right: 0px;
  }
`;

const Count = styled.div`
  position: absolute;
  right: 65px;
`;

const Exit = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  ${font(18, 500)};
  text-align: right;
  text-decoration: underline;
  cursor: pointer;
`;

export default CountClient;
