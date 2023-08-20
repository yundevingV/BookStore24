import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { getCookie } from '../common/Cookie';

interface ReviewComment {
    id: string;
    content: string;
    createdDate: string;
    nickname: string;
    loginId: string;
    reviewId: string;
}

interface CommentListProps {
  reviewComments: ReviewComment[] | undefined;
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
`
const NoCommentsMessage = styled.p`
  font-style: italic;
  color: #777;
`;
const EditButton = styled.button`
  margin : 0px 30px;

`

export default function CommentList({ reviewComments }: CommentListProps) {
    const [ {  content }, onInputChange, resetInput ] = useInput({
        
        content: '',
    });
    
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

        const jwt = getCookie('jwt'); // Assuming you have a function to get the JWT token from cookies.
        
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
            // Loop through reviewComments inside useEffect and make a GET request for each comment individually.
            if (reviewComments && jwt) {
            reviewComments.forEach((comment, idx) => {
                axios
                .get('http://bookstore24.shop/review/comment/post/edit', {
                    params: {
                    reviewId: comment.reviewId,
                    reviewCommentId: comment.id,
                    },
                    headers: {
                    Authorization: jwt,
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
        }, [reviewComments, jwt]);

    console.log(editArray)

    const [c,setC] = useState<string>('');

    useEffect(()=>{
        
    },[])

    return (
        <>
        {reviewComments?.map((comment,index) => (
            <CommentItem key={comment.id} >
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
            <input 
                defaultValue={comment.content}
                name="content"
                onChange={onInputChange} 
                />
            :
            <p > {comment.content} </p>
            
            }


            </CommentItem>
        ))}

        {reviewComments?.length === 0 && <NoCommentsMessage>댓글이 없습니다.</NoCommentsMessage>}
        </>
    );
}
