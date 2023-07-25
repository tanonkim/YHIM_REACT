import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React from 'react';
import styled from 'styled-components';
import { flex } from 'styles';
import WrapperLayout from './WrapperLayout';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Container>
      <Header />
      <Body>
        <WrapperLayout>
          <Outlet />
        </WrapperLayout>
      </Body>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  ${flex('', 'center', 'column')};
  height: 100vh;
`;

const Body = styled.div`
  padding: 120px 0px;
`;

export default Layout;
