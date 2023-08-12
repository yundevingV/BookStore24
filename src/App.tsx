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
import BookStoreEdit from './pages/BookStoreEdit';

import BookReview from './pages/BookReview';
import BookReviewAdd from './pages/BookReviewAdd';
import BookReviewDetail from './pages/BookReviewDetail';
import BookReviewEdit from './pages/BookReviewEdit';

import BookRanking from './pages/BookRanking';

import Kakao from './pages/oauth/Kakao'
import Naver from './pages/oauth/Naver';
import Google from './pages/oauth/Google';

import { Route , Routes } from 'react-router';
import axios from 'axios';
import Finish from './pages/oauth/finish';

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
        <Route path='/bookstore/add' element={<BookStoreAdd />} />
        <Route path="/bookstore/detail" element={<BookStoreDetail />} />
        <Route path="/bookstore/detail/edit" element={<BookStoreEdit />} />


        <Route path='/bookReview' element={<BookReview />} />
        <Route path='/bookReview/add' element={<BookReviewAdd />} />
        <Route path="/bookReview/detail" element={<BookReviewDetail />} />
        <Route path="/bookReview/detail/edit" element={<BookReviewEdit />} />

        <Route path="/bookranking" element={<BookRanking />} />

        {/* OAuth 로그인 */}
        <Route path='/finish' element={<Finish />} />
        <Route path='/auth/kakao/*' element={<Kakao />} />
        <Route path='/auth/naver/*' element={<Naver />} />
        <Route path='/auth/google/*' element={<Google />} />


      </Routes>

  );
}

export default App;
