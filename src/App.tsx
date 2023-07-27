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

import { Route , Routes } from 'react-router';
import axios from 'axios';

function App() {
  async function postRefreshToken() {
    try {
      // 리프레쉬 토큰을 이용해 액세스 토큰을 갱신
      const refreshToken = window.localStorage.getItem("refreshToken");
      const headers = {
        "Content-Type": "application/json;charset=utf-8",
        "refresh-token": refreshToken,
      };
  
      const { data } = await axios.post(
        `/users/refresh`,
        {},
        {
          headers: headers,
        }
      );
  
      // 서버로부터 받은 데이터
      if (data.flag === "success") {
        return data.data[0];
      } else if (data.flag === "fail") {
        return false;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  axios.interceptors.response.use(
    (response) => response, // 응답이 성공적인 경우 아무것도 하지 않음
    async (error) => {
      // 액세스 토큰이 만료됐다면
      if (error.response.status === 401) {
        const response = await postRefreshToken(); // 액세스토큰 갱신
  
        // 갱신된 accessToken을 받으면
        if (response) {
          window.localStorage.setItem("accessToken", response.accessToken); // 새로운 토큰 localStorage 저장
          window.localStorage.setItem("refreshToken", response.refreshToken);
          error.config.headers["access-token"] = response; // 원래 api 요청의 headers의 accessToken도 변경
          const originalResponse = await axios.request(error.config); // 원래 api 요청하기
          return originalResponse; // 원래 api 요청의 response return
        }
        // 리프레시 토큰도 만료됐으면 로그인 페이지로 이동
        else {
          window.localStorage.clear();
          window.location.href = "/login";
        }
      }
  
      return Promise.reject(error);
    }
  );

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
        <Route path="/bookcommunitydetail/:id" element={<BookCommunityDetail />} />
        <Route path="/bookcommunitydetail/:id/edit" element={<BookCommunityEdit />} />

        <Route path="/bookranking" element={<BookRanking />} />

      </Routes>

  );
}

export default App;
