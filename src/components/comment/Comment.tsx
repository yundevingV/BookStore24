
import useDecodedJWT from "../../hooks/useDecodedJWT";
import { getCookie } from "../common/Cookie";
import CommentAdd from "./CommentAdd"
import CommentNumber from "./CommentNumber"

import axios from "axios";
import { styled } from "styled-components"

interface CommentProps{
    id : string | undefined,
    title : string | undefined,
    number : number | undefined,
}

export default function Comment({id , title , number} : CommentProps ){

    let token = getCookie('jwt');
    let dec = useDecodedJWT(token);

    const saveComment = async () => {

        const url = 'http://bookstore24.shop/comment/post/save';
    
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json',
        };
    
        const data = {
            id: id,
            loginId: dec?.loginId,
            title: title,
            content: 'The content of the comment',
        };
    
        try {
          const response = await axios.post(url, data, { headers });
          console.log('Response:', response.data);
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

width :50vw;
height: 50px;


@media (max-width : 1080px){
    width: 580px;
}

`

export const BottomContainer = styled.div`
display: flex;

justify-content: flex-end; 
`