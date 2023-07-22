import React from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

function App() {
  return <Container>React Test</Container>;
}

export default App;

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  width: 100vw;
  height: 100vh;
`;
