import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveAdmitStatus } from '../../action/admit_status';
import { saveCancelStatus } from '../../action/cancel_status';
import DeleteComment from '../../modal/DeleteComment';
import { RootState } from '../../reducer';
import timeForToday from '../../util/timeForToday';

// props
interface ReviewComment {
    id : string;
    reviewCommentId: string;
    content: string;
    createdDate: string;
    nickname: string;
    loginId: string;
    reviewId: string;
}

interface TitleProps{
    title : string | undefined
}
interface CommentListProps {
    reviewComments: ReviewComment[] | undefined;
}

interface CombinedProps extends TitleProps, CommentListProps {}

export default function CommentList(props: CombinedProps) {
    
    const token = sessionStorage.getItem('token');

    const [edit,setEdit] = useState<boolean>(false);
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
    }, []);
    
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
    }
    console.log(props)
    const editComment = async ({reviewCommentId,loginId,reviewId} : editCommentProps ,e : any , curContent : string) => {
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
            content: content.trim(),
        };

        if(curContent === content.trim()){
            alert('수정하실 댓글을 입력해주세요!')
            return;
        }
        if(content ){

        try {
            const response = await axios.post(url, data, { headers });

            setEdit(false);
            alert('댓글을 수정했습니다!');
            window.location.reload();  
            
            } catch (error) {
                alert('댓글을 수정했습니다!');

            }
            }
        else {alert('수정하실 댓글을 입력해주세요!')}
        };

    useEffect(()=>{
        saveAdmitStatus(false);
    })

    const [content,setContent] = useState<string>('');

    const onInputChange = (event : any) => {
        // '내용'을 변경 핸들링
        setContent(event.target.value);
    };
    const dispatch = useDispatch();

    const cancelStatus = useSelector(
        (state : RootState) => state.CancelStatusReducer.cancelStatusData
    )


    const cancle = ( ) => {
        dispatch(saveCancelStatus(true))
    }

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
                    <EditButton onClick={() => cancle()}>삭제</EditButton>
                    
                    {cancelStatus && <DeleteComment title={props.title} reviewComments={props.reviewComments} /> }
                    </>
                    : <></>
                    }
            </p>

            {edit === true && index === idx? 
            <>
            <ModifyInput 
                defaultValue={comment?.content}
                name="content"
                onChange={onInputChange} 
                />
            <ModifyButton onClick={(e: any) => editComment(comment,e,comment?.content)}>
                수정하기
            </ModifyButton>
            </>
            :
            <Comment> {comment?.content} </Comment>
            
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

const ModifyInput = styled.input`
width : 30vw;
height : 30px;
`

const ModifyButton = styled.button`

width : 80px;
height : 35px;

margin-left : 10px;

color : #fff;
background : #567dfc;

border : 0px;

font-family : tway;

border-radius : 6px;
cursor : pointer;

`

const Comment = styled.span`
font-size : 17px;
`
const NoCommentsMessage = styled.p`
  color: #777;
`;
const EditButton = styled.button`
border : 0px;
background : transparent;

cursor : pointer;
`