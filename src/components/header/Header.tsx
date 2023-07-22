import { styled } from 'styled-components';
import { colors, flex } from 'styles';

function Header() {
  return <Container></Container>;
}

const Container = styled.div`
  ${flex('space-between', 'center')};
  width: 100%;
  height: 9vh;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  position: fixed;
`;

export default Header;
