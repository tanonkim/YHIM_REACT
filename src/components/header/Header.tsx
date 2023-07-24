import styled from 'styled-components';
import CenterMenu from './CenterMenu';
import Logo from './Logo';
import UserInfo from './UserInfo';
import { colors, flex } from 'styles';
import WrapperLayout from 'components/layout/WrapperLayout';

function Header() {
  return (
    <Container>
      <WrapperLayout>
        <Contents>
          <Logo />
          <CenterMenu />
          <UserInfo />
        </Contents>
      </WrapperLayout>
    </Container>
  );
}

const Container = styled.header`
  ${flex('', 'center', 'column')}
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.WHITE};
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  z-index: 100;
`;

const Contents = styled.div`
  ${flex('space-between', 'center')};
  width: 100%;
  padding: 10px 0;
`;

export default Header;
