import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { getCookie } from '../common/Cookie';

// props
interface ReviewComment {
    id : string;
    reviewCommentId: string;
    content: string;
    createdDate: string;
    nickname: string;
    loginId: string;
    reviewId: string;
    title : string;
}

interface CommentListProps {
  reviewComments: ReviewComment[] | undefined;
}

// 댓글 수정 권한 확인 응답 - 성공

// interface ReviewAuthProps {
//     reviewId : string,
//     reviewTitle : string,
//     reviewLoginId : string,
//     reviewCommentId : string,
//     reviewCommentLoginId : string,
//     reviewCommentContent : string,
// }

// interface ReviewAuthListProps {
//     reviewAuthList : ReviewAuthProps[] | undefined
// }

export default function CommentList({ reviewComments }: CommentListProps) {

    const [data,setData] = useState<ReviewComment[] | undefined>();

    useEffect(()=>{
        setData(reviewComments);
    },[])

    
    
    const token = sessionStorage.getItem('token')

    // 날짜
    function formatDate(inputDate : string) {
        const date = new Date(inputDate);
        
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
        
        return formattedDate;
        }

        const [edit,setEdit] = useState<boolean>(false)
        const [idx,setIdx] = useState<number>();

        const doEdit = (idx : number) =>{
            edit === false ? setEdit(true) : setEdit(false)
            setIdx(idx);
            
        }
        
        const [editArray, setEditArray] = useState<boolean[] >([]);

        useEffect(() => {
            // Initialize editArray with the desired length and initial value
            if (reviewComments) {
            const length = reviewComments.length;
            const initialValue = false;
            const initialEditArray = new Array(length).fill(initialValue);
            setEditArray(initialEditArray);
            }
        }, [reviewComments]);
        
        useEffect(() => {
            if (reviewComments && token) {
            reviewComments.forEach((comment, idx) => {
                axios
                .get('http://bookstore24.shop/review/comment/post/edit', {
                    params: {
                    reviewId: comment.reviewId,
                    reviewCommentId: comment.reviewCommentId,
                    },
                    headers: {
                    Authorization: token,
                    },
                })
                .then((response) => {
                    // Assuming your response indicates success in some way, update editArray
                    
                    setEditArray((prevEditArray) => {
                        const updatedArray = [...prevEditArray];
                        updatedArray[idx] = true;
                        return updatedArray;
                    });
                })
                .catch((error) => {
                    console.log('Error:', error.response);
                });
            });
            }
        }, [reviewComments, token]);


    interface editCommentProps{
        reviewCommentId: string;
        loginId: string;
        reviewId: string;
        title : string;
    }
    
    const editComment = async ({reviewCommentId,title,loginId,reviewId} : editCommentProps ,e : any) => {
        e.preventDefault();

        const url = 'http://bookstore24.shop/review/comment/post/edit/save';
    
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json',
        };
    
        const data = {
            reviewId: reviewId,
            loginId: loginId,
            title: 'test',
            reviewCommentId :reviewCommentId,
            content: content,
        };
        if(content){
        try {
            const response = await axios.post(url, data, { headers });
            console.log('Response:', response.data);
            console.log(data)
            setEdit(false);
            alert('수정이 완료되었습니다.')
            
            } catch (error) {
            console.error('Error:', error);
            console.log(data)
            }
            }
        };

    const [content,setContent] = useState<string>('');

    const onInputChange = (event : any) => {
        // '내용'을 변경 핸들링
        setContent(event.target.value);
        console.log(content)
    };


    return (
        <>
        {reviewComments?.map((comment,index) => (
            <CommentItem>
            <p> 
                {comment.nickname}
                    <DateSpan>

                        {formatDate(comment.createdDate)}

                    </DateSpan>
                    {editArray[index] ?
                    <EditButton onClick={() => doEdit(index)}>수정</EditButton>
                    : <></>
                    }
            </p>

            {edit === true && index === idx? 
            <>
            <input 
                defaultValue={comment?.content}
                name="content"
                onChange={onInputChange} 
                />
            <button onClick={(e) => editComment(comment,e)}>                
                완료
            </button>
            </>
            :
            <p > {comment?.content} </p>
            
            }


            </CommentItem>
        ))}

        {reviewComments?.length === 0 && <NoCommentsMessage>댓글이 없습니다.</NoCommentsMessage>}
        </>
    );
}

const CommentItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;

  p {
    margin: 10px 0px;
    font-size : 20px;
    paddint : 5px;
  }
`;
const DateSpan = styled.span`
font-size : 15px;
margin : 0px 15px;
`
const NoCommentsMessage = styled.p`
  font-style: italic;
  color: #777;
`;
const EditButton = styled.button`

`