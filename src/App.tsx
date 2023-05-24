//내부
import React from 'react';
import Login from './pages/Login'


//외부
import { Route , Routes } from 'react-router';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
    <Routes>
      <Route path='/login' Component={Login} />
    </Routes>

    </AppContainer>
  );
}

const AppContainer = styled.div`
  
  //상우하좌 
  margin : -1vh -1vw 0px -1vh;

`

export default App;