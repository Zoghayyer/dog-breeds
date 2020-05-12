import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from '@emotion/styled';
import Header from '../header';

const App: FC = () => (
  <Container>
    <Header />
    {/* Happy coding! */}
  </Container>
);

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '80%',
  paddingTop: '60px',
});

export default hot(App);
