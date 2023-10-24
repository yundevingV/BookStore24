// useFetchListData.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer';

interface DataType{
    "id": number,
    "title": string,
    "score": string,
    "price" : number,
    "coverImg": string,
    "bookTitle": string,
    "author": string,
    "publisher": string,
    "nickname": string,
    "loginId": string,
    "createdDate": string,
    "view": number
}

function useFetchListData(token :string | null, word  :string) {

    const [data, setData] = useState<DataType[]>([]); 
    const [totalPages, setTotalPages] = useState<number | undefined>();
    
    const page = useSelector(
      (state: RootState) => state.PagingReducer.PagingData
  );

  useEffect(() => {
    if (word) {
      axios
        .get(`https://bookstore24.shop/member/profile/${word}/list`, {
          params: {
            page: page | 0,
            size: 10,
          },
          headers: {
            'Authorization': token,
          },
        })
        .then((response) => {
          console.log(response);
          setData(response.data.content);
          setTotalPages(response.data.totalPages);
        })
        .catch((error) => {
          console.log('에러:', error.response);
        });
    }
  }, [token, word, page]);

  return { data, totalPages };
}

export default useFetchListData;
