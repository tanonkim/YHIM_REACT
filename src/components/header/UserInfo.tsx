import { useState } from 'react';
import styled from 'styled-components';
import UserSign from './UserSign';
import { colors, flex, font } from 'styles';

function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BtnBlock>
      <InfoTitle>당신의 공간을 네집내집하세요</InfoTitle>
      <Icon alt="world" src="/images/world.png" />
      <LoginBtn onClick={openModal}>
        <Hamburger alt="hamburger" src="/images/hamburger.png" />
        <UserIcon alt="user" src="/images/user.png" />
        {isOpen ? <UserSign /> : null}
      </LoginBtn>
    </BtnBlock>
  );
}

const BtnBlock = styled.div`
  ${flex('space-between', 'center')};
`;

const InfoTitle = styled.div`
  ${font(16, 500)};
  color: ${colors.BLACK};

  :hover {
    opacity: 1;
    cursor: pointer;
    background: yellow;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-left: 20px;

  :hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.div`
  ${flex('', 'center')};
  height: 40px;
  margin-left: 20px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;

  :hover {
    cursor: pointer;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
    transition-duration: 0.2s;
  }
`;

const Hamburger = styled.img`
  width: 15px;
  margin-left: 15px;
`;

const UserIcon = styled.img`
  width: 30px;
  margin: 0px 10px 0px 15px;
`;

export default UserInfo;
