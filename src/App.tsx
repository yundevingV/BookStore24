import React from 'react';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import FindId from './pages/FindId';
import FindPwd from './pages/FindPwd';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import EditPwd from './pages/EditPwd';
import BookStore from './pages/BookStore';
import BookStoreAdd from './pages/BookStoreAdd';
import BookStoreDetail from './pages/BookStoreDetail';
import BookStoreEdit from './pages/BookCommunityEdit';

import BookComunity from './pages/BookCommunity';
import BookCommunityAdd from './pages/BookCommunityAdd';
import BookCommunityDetail from './pages/BookCommunityDetail';
import BookCommunityEdit from './pages/BookCommunityEdit';

import BookRanking from './pages/BookRanking';

import Kakao from './pages/oauth/Kakao'
import Naver from './pages/oauth/Naver';
import Google from './pages/oauth/Google';

import { Route , Routes } from 'react-router';
import axios from 'axios';

function App() {

  return (

      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/findid' element={<FindId />} />
        <Route path='/findpwd' element={<FindPwd />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/editpwd' element={<EditPwd />} />
        <Route path='/bookstore' element={<BookStore />} />
        <Route path='/bookstoreadd' element={<BookStoreAdd />} />
        <Route path="/bookstoredetail/:id" element={<BookStoreDetail />} />
        <Route path="/bookstoredetail/:id/edit" element={<BookStoreEdit />} />


        <Route path='/bookcommunity' element={<BookComunity />} />
        <Route path='/bookcommunityadd' element={<BookCommunityAdd />} />
        <Route path="/bookcommunitydetail/" element={<BookCommunityDetail />} />
        <Route path="/bookcommunitydetail/:id/edit" element={<BookCommunityEdit />} />

        <Route path="/bookranking/*" element={<BookRanking />} />

        {/* OAuth 로그인 */}
        <Route path='/bookstore24.shop/auth/kakao/*' element={<Kakao />} />
        <Route path='/auth/kakao/*' element={<Kakao />} />
        <Route path='/auth/naver/*' element={<Naver />} />
        <Route path='/auth/google/*' element={<Google />} />


      </Routes>

  );
}

export default App;
