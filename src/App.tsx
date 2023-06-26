import React from 'react';
import Login from './pages/Login'
import Join from './pages/Join';
import Main from './pages/Main';
import FindId from './pages/FindId';
import FindPwd from './pages/FindPwd';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import EditPwd from './pages/EditPwd';

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
        <Route path='/findpwd' element={<FindPwd />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/editpwd' element={<EditPwd />} />

      </Routes>

    </AppContainer>
  );
}

const AppContainer = styled.div`
  /* 상 우 하 좌 */
  margin : -1vh -1vw 0px -1vh;

`

export default App;
