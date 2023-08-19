import React from 'react';
import styled from 'styled-components';

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

export default function CommentList({ reviewComments }: CommentListProps) {
    
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
    return (
        <>
        {reviewComments?.map((comment) => (
            <CommentItem key={comment.id}>

            <p> 
                {comment.nickname} 
                    <DateSpan>
                        {formatDate(comment.createdDate)}
                    </DateSpan>
            </p>

            <p> {comment.content}</p>

            </CommentItem>
        ))}

        {reviewComments?.length === 0 && <NoCommentsMessage>댓글이 없습니다.</NoCommentsMessage>}
        </>
    );
}
