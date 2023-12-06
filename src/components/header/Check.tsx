import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import { saveloginStatus } from "../../action/login_status";
import { openModal } from "../../action/modal";

export const Check = () =>{

    const dispatch = useDispatch();

    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );
    
    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (token) {
            dispatch(saveloginStatus(true));

            axios.get('http://bookstore24.shop/member/nicknameresidence/check'
                ,
                {

                    headers: {
                        'Authorization': token
                    }
                })

                .then(response => {
                    setNickname(response.data.nickname);
                })
                .catch(error => {
                    console.log(`에러 사유 : ${error}`)
                    dispatch(openModal(true));
                });
        } else {
            // 로그인이 안되있을때
        }
    }, [dispatch])
    
    return{nickname}

}