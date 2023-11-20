import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";
import axios from "axios";

import BookReview from "../pages/review/BookReview";

export default function useFetchReview() {
    const { pathname } = useLocation();
    const page = useSelector((state: RootState) => state.PagingReducer.PagingData);
    
    const [data, setData] = useState<DataType[] | undefined>();
    const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

    useEffect(() => {
        axios
            .get(`http://bookstore24.shop/review/post/list`, {
                params: {
                    page: page | 0,
                    size: 10,
                },
            })
            .then((response) => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);
                sessionStorage.setItem('url', pathname);
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, [page]);

    return (
        {data, totalPages, pathname}

    );
}

interface DataType {
    "id": number,
    "title": string,
    "score": number,
    "coverImg": string,
    "bookTitle": string,
    "author": string,
    "publisher": string,
    "nickname": string,
    "loginId": string,
    "createdDate": string,
    "view": number,
}
