import axios from 'axios';
import { timeEnd } from 'console';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import timeForToday from '../../util/timeForToday';
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

interface TitleProps{
    title : string | undefined
}
interface CommentListProps {
    reviewComments: ReviewComment[] | undefined;
}

interface CombinedProps extends TitleProps, CommentListProps {}

export default function CommentList(props: CombinedProps) {
    
        const token = sessionStorage.getItem('token')

        const [edit,setEdit] = useState<boolean>(false)
        const [idx,setIdx] = useState<number>();

        const doEdit = (idx : number) =>{
            edit === false ? setEdit(true) : setEdit(false)
            setIdx(idx);
        }
        
        const [editArray, setEditArray] = useState<boolean[] >([]);

        useEffect(() => {
            // Initialize editArray with the desired length and initial value
            if (props.reviewComments) {
            const length = props.reviewComments.length;
            const initialValue = false;
            const initialEditArray = new Array(length).fill(initialValue);
            setEditArray(initialEditArray);
            }
        }, [props.reviewComments]);
        
        useEffect(() => {
            if (props.reviewComments && token) {
            props.reviewComments.forEach((comment, idx) => {
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
                });
            });
            }
        }, [props.reviewComments, token]);


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
            title: props.title,
            reviewCommentId :reviewCommentId,
            content: content,
        };
        if(content){
        try {
            const response = await axios.post(url, data, { headers });

            setEdit(false);
            alert('수정이 완료되었습니다.')
            window.location.replace("")
            
            } catch (error) {

            }
            }
        };

    const [content,setContent] = useState<string>('');

    const onInputChange = (event : any) => {
        // '내용'을 변경 핸들링
        setContent(event.target.value);
    };

    


    return (
        <>
        {props.reviewComments?.map((comment,index) => (
            <CommentItem>
            <p> 
                {comment.nickname}
                    <DateSpan>
                    
                        {timeForToday(comment.createdDate)}

                    </DateSpan>
                    {editArray[index] ?
                    <>
                    <EditButton onClick={() => doEdit(index)}>수정</EditButton>
                    <EditButton >삭제</EditButton>
                    </>
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

        {props.reviewComments?.length === 0 && <NoCommentsMessage>댓글이 없습니다.</NoCommentsMessage>}
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
border : 0px;
background : transparent;

cursor : pointer;
`