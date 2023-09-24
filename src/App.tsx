import React from 'react';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import FindId from './pages/profile/FindId';
import FindPwd from './pages/profile/FindPwd';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import EditPwd from './pages/profile/EditPwd';
import BookStore from './pages/store/BookStore';
import BookStoreAdd from './pages/store/BookStoreAdd';
import BookStoreDetail from './pages/store/BookStoreDetail';
import BookStoreEdit from './pages/store/BookStoreEdit';

import BookReview from './pages/review/BookReview';
import BookReviewAdd from './pages/review/BookReviewAdd';
import BookReviewDetail from './pages/review/BookReviewDetail';
import BookReviewEdit from './pages/review/BookReviewEdit';

import BookRanking from './pages/ranking/BookRanking';

import Kakao from './pages/oauth/Kakao'
import Naver from './pages/oauth/Naver';
import Google from './pages/oauth/Google';

import Test from './pages/test/Test';

import { Route , Routes } from 'react-router';
import SearchReviewResult from './pages/search/SearchReviewResult';
import SearchStoreResult from './pages/search/SearchStoreResult';
import UserList from './pages/profile/UserList';

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
        <Route path="/bookstore/detail/*" element={<BookStoreDetail />} />
        <Route path="/bookstore/detail/edit/*" element={<BookStoreEdit />} />


        <Route path='/bookReview' element={<BookReview />} />
        <Route path='/bookReview/add' element={<BookReviewAdd />} />
        <Route path="/bookReview/detail/*" element={<BookReviewDetail />} />
        <Route path="/bookReview/detail/edit/*" element={<BookReviewEdit />} />

        <Route path="/bookranking" element={<BookRanking />} />

        {/* OAuth 로그인 */}
        <Route path='/auth/kakao/*' element={<Kakao />} />
        <Route path='/auth/naver/*' element={<Naver />} />
        <Route path='/auth/google/*' element={<Google />} />

        <Route path='/search/bookreview/result' element={<SearchReviewResult /> } />
        <Route path='/search/bookstore/result' element={<SearchStoreResult /> } />

        <Route path='/profile/review' element={< UserList/>} />
        <Route path='/profile/sell/on' element={< UserList/>} />
        <Route path='/profile/sell/off' element={< UserList/>} />

        <Route path='/test' element={<Test />} />

      </Routes>

  );
}

export default App;
