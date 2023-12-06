import React,{useState,useEffect} from "react";
import useInput from "../../hooks/useInput";
import user from '../../assets/imgs/user.svg'
import Header from "../../components/common/Header";
import { Space } from "../../styles/Space";
import { StyledButtonLink } from "../../styles/link";
import DropTest from "../../components/common/DropDown";


import { styled } from "styled-components";
import axios from "axios";
import { useSelector} from "react-redux";
import { RootState } from "../../reducer/index";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { saveDropDownValue } from "../../action/dropdown_value";
import { saveloginStatus } from "../../action/login_status";
import WithdrawAccount from "../../modal/WithdrawAccount";
import Toast from "../../components/toast/Toast";
import { useLocation } from "react-router";
import Footer from "../../components/common/Footer";

export default function EditProfile() {

    //입력창 이메일
    const [ { nickname }, onInputChange, resetInput ] = useInput({
        nickname : '',
    });

    const navigate = useNavigate();
    const location = useLocation();

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

    // 토스트 구현
    const [toast, setToast] = useState(false);

    // 프로필수정 접근 권한 부여
    useEffect(()=>{
        axios.get(`http://bookstore24.shop/member/profile/edit`,
            {
                headers : {
                    'Authorization' : token
                }
            }
            )
            .then(response =>{
                setData(response.data);
                dispatch(saveDropDownValue(response.data.residence));

            })
            .catch(error => {
                console.log('Error : ', error);
                navigate(-1);
            })
    },[])

    
    // 거주지 수정
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
            setToast(true);
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        resetInput();
        };
    
        // 닉네임 수정
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
                setToast(true);

                console.log(`Response : ${JSON.stringify(data)}`);
                })
                .catch((error) => {
                console.log('Error:', error.response.data);
                });
            
            resetInput();
            };}

        
    const [view,setView] = useState<boolean>(false);

    const open = () => {
        setView(true);
    } 

    const close = () => {
        setView(false);
    } 
    
    return(
        <Wrapper>
            <Header />
            <Container>
                {view ? <WithdrawAccount onClose={close}/> : <></>}

                {toast && <Toast setToast={setToast} text="수정 되었습니다." />}

                <Space width={0} height={5} />

                {location.state.loginType === 'bookstore24' ?
                    <PwdButtonContainer>
                        <StyledEditButtonLink to='/editpwd' state={{loginType : location.state.loginType }}>
                            비밀번호 수정하기

                        </StyledEditButtonLink>
                    </PwdButtonContainer>
                    : <></>
                }

                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <P>프로필사진</P>
                        <Picture src={user} />
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

                    <Box>
                        <P>로그인 정보</P>
                        <Space width={0} height={15} />


                    </Box>
                </ProfileInfoContainer>


                <SaveButtonContainer>
                    <SaveButton onClick={modifyResidence}>
                        거주지 수정하기
                    </SaveButton>
                </SaveButtonContainer>

                <RetireButtonContainer>
                    <RetireButton onClick={open}>
                        회원 탈퇴하기
                    </RetireButton>
                </RetireButtonContainer>
            </Container>
            <Footer />
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


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;

`
const PwdButtonContainer = styled.div`

text-align : right;
`


const StyledEditButtonLink = styled(StyledButtonLink)`
    padding : 10px;

    border-radius : 8px;

    font-size : 15px;
    font-family: tway, sans-serif, Arial;

    font-weight : bold;
    background : #cecece;
    text-decoration : none;

    color : #000;
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

background-color: #567dfc;

border : 0px;
border-radius : 8px;

color : #ffffff;

font-family: tway, sans-serif, Arial;

&:hover {
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

background-color: #ff225d;

border : 0px;
border-radius : 8px;

color : #ffffff;    
font-family: tway, sans-serif, Arial;

&:hover {
    cursor : pointer;
    }

`