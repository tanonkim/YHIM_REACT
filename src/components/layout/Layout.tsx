import React from 'react';
import { styled } from 'styled-components';
import { flex } from 'styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {/* <Header /> */}
      {children}
    </Container>
  );
}

const Container = styled.div`
  ${flex('', '', 'column')}
`;

export default Layout;
