import React from 'react';
import Login from './pages/Login'
import Join from './pages/Join';
import Main from './pages/Main';
import FindId from './pages/FindId';


import { Route , Routes } from 'react-router';
import styled from 'styled-components';

function App() {


  return (

    <AppContainer>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/findid' element={<FindId />} />

      </Routes>

    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin : -1vh -1vw 0px -1vh;

`

export default App;
