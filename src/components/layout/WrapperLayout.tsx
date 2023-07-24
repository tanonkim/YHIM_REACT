import styled from 'styled-components';
import { flex } from 'styles';

function WrapperLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  ${flex('', '', 'column')};
  width: 100%;
  max-width: 1440px;
`;

export default WrapperLayout;
