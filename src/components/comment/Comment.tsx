
import useDecodedJWT from "../../hooks/useDecodedJWT";
import { getCookie } from "../common/Cookie";
import CommentAdd from "./CommentAdd"
import CommentNumber from "./CommentNumber"
import useInput from "../../hooks/useInput";

import axios from "axios";
import { styled } from "styled-components"

interface CommentProps{
    id : string | undefined,
    loginId : string | undefined,
    title : string | undefined,
    number : number | undefined,
}

export default function Comment({id , loginId, title , number} : CommentProps ){

    const token = sessionStorage.getItem('token')

    const [ {  content }, onInputChange, resetInput ] = useInput({
        
        content: '',
    });

    const saveComment = async () => {
        const url = 'http://bookstore24.shop/review/comment/post/save';
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json',
        };
        
        // Assuming these values are defined elsewhere in your code
        const data = {
            id: id,
            loginId: loginId,
            title: title,
            content: content,
        };
        
        // Check if the 'content' field is not empty
        if (!data.content || !data.content.trim()) {
            alert('댓글을 입력해주세요.');
            return; // Exit the function to prevent posting an empty comment
        }
    
        try {
            const response = await axios.post(url, data, { headers });
            console.log('Response:', response.data);
            resetInput();
            alert('댓글을 성공적으로 작성했습니다 !');
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    



    return(
        <>
            <CommentContainer>

                <TopContainer>
                    <CommentNumber number={number}/>
                </TopContainer>


                <ContentContainer>
                    <CommentInputWrapper> 
                        <CommentInput 
                            placeholder='댓글을 입력하세요.' 
                            name="content"
                            value={content}
                            onChange={onInputChange} 
                        /> 
                    </CommentInputWrapper>
                </ContentContainer>
                <BottomContainer>
                    <CommentAdd onClick={saveComment}/>
                </BottomContainer>

            </CommentContainer>
        </>
    )
}

export const CommentContainer = styled.div`

`

export const TopContainer = styled.div`
margin : 10px 0px;
`


export const ContentContainer = styled.div`

`

export const CommentInputWrapper = styled.div`

`
export const CommentInput = styled.input`

width :70vw;
height: 50px;


@media (max-width : 1080px){
    width: 580px;
}

`

export const BottomContainer = styled.div`
display: flex;

justify-content: flex-end; 
`