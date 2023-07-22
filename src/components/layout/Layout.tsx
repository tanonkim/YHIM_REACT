import Header from 'components/header/Header';
import React from 'react';
import { styled } from 'styled-components';
import { flex } from 'styles';

function Layout() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  ${flex('', '', 'column')}
`;

export default Layout;
