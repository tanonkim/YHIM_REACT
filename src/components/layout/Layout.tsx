import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

function Layout() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  ${flex('', 'center', 'column')};
  height: 100vh;
`;

export default Layout;
