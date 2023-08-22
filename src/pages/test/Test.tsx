import axios from "axios";
import React, { useEffect, useState } from "react";

interface ProfileDataType {
    email: string;
    id: number;
    loginId: string;
    nickname: string;
    profileImg: string;
    provider: string;
    residence: string;
    role: string;
}

interface BookDataType {
    author: string
    coverImg: string
    createdDate: string
    id: number
    isbn: number
    publisher: string
    title: string
}
interface ReviewComment {
    id: string;
    content: string;
    createdDate: string;
    nickname: string;
    loginId: string;
    reviewId: string;
  }
interface ReviewDataType {
    bookId: number
    content: string
    createdDate: string
    id    : number
    memberId:    number
    score:    number
    title:    string
    view:    number
    loginId : string
    reviewComments : ReviewComment[],
}

interface SellDataType {
    bookId    :    number
    content    :    string
    createdDate    :    string
    id    :    number
    memberId    :    number
    price    :    number
    status    :    boolean
    title    :    string
    view    :    number
    loginId : string

}

interface CommentDataType {
    id : any,
    reviewId : any,
    content : any,

}

export default function Test() {

    const [data, setData] = useState<ProfileDataType[] | null>(null);
    const [data2, setData2] = useState<BookDataType[] | null>(null);
    const [data3, setData3] = useState<ReviewDataType[] | null>(null);
    const [data4, setData4] = useState<SellDataType[] | null>(null);
    const [data5, setData5] = useState<CommentDataType[] | null>(null);

    useEffect(() => {

        axios.get("http://bookstore24.shop/member/list/sub")
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);



    useEffect(() => {

        axios.get("http://bookstore24.shop/book/list/sub")
            .then(response => {
                console.log(response.data);
                setData2(response.data)
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    useEffect(() => {

        axios.get("http://bookstore24.shop/review/list/sub")
            .then(response => {
                console.log(response.data);
                setData3(response.data)

            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    useEffect(() => {

        axios.get("http://bookstore24.shop/sell/list/sub")
            .then(response => {
                console.log(response.data);
                setData4(response.data)

            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);


useEffect(() => {

        axios.get("http://bookstore24.shop/reviewcomment/list/sub")

            .then(response => {
                console.log(response.data);
                setData5(response.data)

            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    
    console.log(data3)

    return (
        <>
            <div>
                <h2>Profile Data:</h2>
                {data && (
                    <ul>
                        {data.map((item: ProfileDataType) => (
                            <li key={item.id}>
                                <div>Email: {item.email}</div>
                                <div>login Id : {item.loginId}</div>
                                {/* ... other profile data */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h2>Book Data:</h2>
                {data2 && (
                    <ul>
                        {data2.map((item: BookDataType) => (
                            <li key={item.id}>
                                <div>Author: {item.author}</div>

                                {/* ... other book data */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h2>Review Data:</h2>
                {data3 && (
                    <ul>
                        {data3.map((item: ReviewDataType) => (
                            <li key={item.id}>
                                <div>Book ID: {item.title}</div>
                                <div>ID: {item.loginId}</div>

                                {/* ... other review data */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h2>Sell Data:</h2>
                {data4 && (
                    <ul>
                        {data4.map((item: SellDataType) => (
                            <li key={item.id}>
                                <div>Book ID: {item.title}</div>
                                <div>login ID: {item.loginId}</div>
                                <div>status : {item.status}</div>

                                {/* ... other sell data */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h2>Comment Data:</h2>
                {data5 && (
                    <ul>
                        {data5.map((item : any) => (
                            <li key={item.id}>
                                <div>reviewId: {item.reviewId}</div>
                                <div>ID: {item.id}</div>
                                <div>content: {item.content}</div>


                                {/* ... other sell data */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
