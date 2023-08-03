import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import CountClient from './CountClient';

function PersonOption() {
  const [isOpen, setIsOpen] = useState(false);
  const [guest, setGuest] = useState(1);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setGuest(guest);
  }, [guest]);

  return (
    <>
      <div>
        {isOpen ? (
          <CountClient setGuest={setGuest} setIsOpen={setIsOpen} />
        ) : null}
      </div>
      <Container onClick={openModal}>
        <div>
          <Count>인원</Count>
          <Guest>게스트 {guest}명</Guest>
        </div>
        <PersonIcon
          alt="arrow"
          src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')};
  padding: 15px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Count = styled.div`
  padding: 10px 0px 10px 0px;
  margin-bottom: 5px;
  ${font(13, 500)};
`;

const Guest = styled.div`
  padding: 10px 0px 10px 0px;
  ${font(20, 500)};
`;

const PersonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default PersonOption;
