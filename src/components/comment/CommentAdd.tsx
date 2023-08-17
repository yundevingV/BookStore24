import { styled } from "styled-components"

interface CommentAddProps {
    onClick: () => void;
  }

export default function CommentAdd({onClick} : CommentAddProps){    
    return(
        <AddButton onClick={onClick}>
            댓글작성 
        </AddButton>      

    )
}



export const AddButton = styled.button`

width: 100px;
height: 30px;

border-radius : 4px;
background: #20dba1;
border : 0px solid #ffffff;

font-family: tway, sans-serif, Arial;

cursor : pointer;

margin : 10px 0px;

`