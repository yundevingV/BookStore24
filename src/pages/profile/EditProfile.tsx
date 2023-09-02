import React,{useState,useEffect} from "react";
import useInput from "../../hooks/useInput";
import Jisoo from '../../assets/imgs/jisoo.jpg'
import Header from "../../components/common/Header";
import { Space } from "../../styles/Space";
import { StyledButtonLink } from "../../styles/link";
import DropTest from "../../components/common/DropDown";


import { styled } from "styled-components";
import axios from "axios";
import { getCookie } from "../../components/common/Cookie";
import { useSelector} from "react-redux";
import { RootState } from "../../reducer/index";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { saveDropDownValue } from "../../action/dropdown_value";
import { saveloginStatus } from "../../action/login_status";

export default function EditProfile() {

    //입력창 이메일
    const [ { nickname }, onInputChange, resetInput ] = useInput({
        nickname : '',
    });

    const navigate = useNavigate();

    const dropDownValueData = useSelector(
        (state: RootState) => state.DropDownValueReducer.dropDownValueData
    );

    interface DataType{
        loginId : string;
        email : string;
        nickname : string;
        residence : string;
        profileImg : any;
    }

    const [data,setData] = useState<DataType | null>(null)
    const dispatch =useDispatch();
    
    const token = sessionStorage.getItem('token')

    useEffect(()=>{
        axios.get(`http://bookstore24.shop/member/profile/edit`,
            {
                headers : {
                    'Authorization' : token
                }
            }
            )
            .then(response =>{
                console.log(response.data)
                setData(response.data);
                dispatch(saveDropDownValue(response.data.residence))            

            })
            .catch(error => {
                console.log('Error : ', error);
                navigate(-1);
            })
    },[])
    


    const modifyResidence = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        const token = sessionStorage.getItem('token')
        
        // Data to be sent in the request body.
        const data = {
            "residence":  dropDownValueData,

        };
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,
            },
        };
        
        axios
            .post(`http://bookstore24.shop/member/profile/residence/edit/save`, data, config)
            .then((response) => {
            console.log(`Response : ${JSON.stringify(data)}`);
            // window.location.replace("/")

            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        resetInput();
        };
    
        const modifyNickname = (e: React.MouseEvent) => {
            e.preventDefault(); // Prevent the default form submission behavior.
    
            const token = sessionStorage.getItem('token')
            
            // Data to be sent in the request body.
            const data = {
                "nickname":  nickname,
    
            };
            
            // Axios configuration for the POST request.
            const config = {
                headers: {
                Authorization: token,
                },
            };

            if (nickname.length >= 1 ){
            axios
                .post(`http://bookstore24.shop/member/profile/nickname/edit/save`, data, config)
                .then((response) => {
                console.log(`Response : ${JSON.stringify(data)}`);
                })
                .catch((error) => {
                console.log('Error:', error.response.data);
                });
            
            resetInput();
            };}

    const withdraw = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        const token = sessionStorage.getItem('token')
        console.log(token)
        const data ={}
        const config = {
            headers: {
            Authorization: token,
            },
        };
        axios
            .post(`http://bookstore24.shop/member/withdraw`, data,config)
            .then((response) => {
            alert('회원 탈퇴가 완료되었습니다.');
            navigate('./');
            dispatch(saveloginStatus(false));
            

            })
            .catch((error) => {
            console.log('Error:', error.response);
            });
        
        resetInput();
        };
    return(
        <Wrapper>
            <Header />
            <Container>
                <Space width={0} height={5} />

                <PwdButtonContainer>
                    <PwdButton>
                        <StyledButtonLink to='/editpwd'>
                            비밀번호 수정하기

                        </StyledButtonLink>
                    </PwdButton>
                </PwdButtonContainer>

                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <P>프로필사진</P>
                        <Picture src={Jisoo} />
                    </PictureContainer>
                    <Space width={0} height={20} />

                    <Box>
                        <P>
                            이메일
                        </P>

                        <NickNameInput 
                            value={data?.email}
                            readOnly/>

                    </Box> 

                    <Box>
                        <P>
                            닉네임
                        </P>

                        <NickNameInput 
                            name="nickname" 
                            defaultValue={data?.nickname}
                            onChange={onInputChange}
                            />
 
                    </Box>      

                    <SaveButtonContainer>
                        <SaveButton onClick={modifyNickname}>
                            닉네임 수정하기
                        </SaveButton>
                    </SaveButtonContainer>

                    <Space width={0} height={20} />

                    <Box>
                        
                        <P>거주지역 </P>
                        
                        <Space width={0} height={15} />

                        <DropTest dropValue={dropDownValueData}/>
                    </Box>

                </ProfileInfoContainer>


                <SaveButtonContainer>
                    <SaveButton onClick={modifyResidence}>
                        거주지 수정하기
                    </SaveButton>
                </SaveButtonContainer>

                <RetireButtonContainer>
                    <RetireButton onClick={withdraw}>
                        회원 탈퇴하기
                    </RetireButton>
                </RetireButtonContainer>
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width : 500px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;

`
const PwdButtonContainer = styled.div`

text-align : right;
`

const PwdButton = styled.button`
font-family: tway, sans-serif, Arial;
font-weight : bold;
font-size : 15px;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

background-color : transparent;

border : 0.1px solid #000000;

`
const ProfileInfoContainer = styled.div`
margin:0px;
border : 0px;

width : 100%;

display : inline-block;
`

const PictureContainer = styled.div`
text-align : center;
`

const Picture = styled.img`

width : 70px;
height : 70px;
padding : 15px;

`


const P = styled.p`

font-size : 15px;
text-align : center;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`


const NickNameInput = styled.input `


width : 280px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 0px;

&::placeholder{
    font-family: tway, sans-serif, Arial;
    color : #000000;
	}

//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid blue;
    }
`
const Box = styled.div`

text-align : center;

margin-bottom : 20px;

`

const SaveButtonContainer = styled.div`
text-align : center;
margin-top : 20px;
margin-bottom: 20px;

`

const SaveButton = styled.button`
//기본 크기가 input > button
width : 120px;
height : 30px;

background-color: #ffffff;
border : 2px solid #033bfa;
color : black;    


font-family: tway, sans-serif, Arial;

&:hover {

  color : #ffffff;
  background-color: #033bfa;
  border : 2px solid #ffffff;

    cursor : pointer;
    }

`


const RetireButtonContainer = styled.div`
text-align : center;
margin-top : 40px;
margin-bottom : 40px;

`

const RetireButton = styled.button`

//기본 크기가 input > button
width : 120px;
height : 30px;

background-color: #e3174f;
border : 2px solid #ffffff;
color : black;    


font-family: tway, sans-serif, Arial;

&:hover {

  background-color: #ffffff;
  border : 2px solid #e3174f;

    cursor : pointer;
    }

`