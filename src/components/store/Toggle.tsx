import axios from 'axios';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import useDecodedJWT from '../../hooks/useDecodedJWT';
import { getCookie } from '../common/Cookie';

interface toggleTypeProps{
    status : string | undefined
    loginId : string | undefined
    title : string | undefined
}

function ToggleButton({ status , loginId, title }: toggleTypeProps) {
    const [isToggled, setToggled] = useState(status);

    let token = getCookie('jwt');
    let dec = useDecodedJWT(token);

    const handleToggle = async () => {
        try {
        const response = await axios.post(
            'http://bookstore24.shop/sell/post/status/edit/save',
            {
            loginId: loginId,
            title: title,
            },
            {
            headers: {
                Authorization: token,
            },
            }
        );

        console.log(`Response: ${response.data}`);
        if (isToggled === 'off') {
            setToggled('on');
        } else {
            setToggled('off');
        }
        } catch (error) {
        console.log('Error:', error);
        }
    };

    return (
        <Container>
        <ToggleBtn isToggled={isToggled} onClick={handleToggle}>
            {isToggled === 'on' ? '판매중' : '판매보류'}
        </ToggleBtn>
        </Container>
    );
    }

export default ToggleButton;

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface toggleProps {
    isToggled : string | undefined
}

const ToggleBtn = styled.button<toggleProps>`
    width: 80px;
    height: 30px;
    
    border-radius: 5px;
    
    background-color: ${({ isToggled }) =>
        isToggled === 'on' ? '#3CB371' : '#ccc'};

    cursor: pointer;

    border : 0px;

    font-family: tway, sans-serif, Arial;

    transition: background-color 0.3s ease-in-out;
`;
