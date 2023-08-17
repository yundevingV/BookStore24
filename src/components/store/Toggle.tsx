import axios from 'axios';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import useDecodedJWT from '../../hooks/useDecodedJWT';
import { getCookie } from '../common/Cookie';

function ToggleButton({ status }: { status: string | undefined }) {
    const [isToggled, setToggled] = useState(status);

    let token = getCookie('jwt');
    let dec = useDecodedJWT(token);

    const handleToggle = async () => {
        try {
        const response = await axios.post(
            'http://bookstore24.shop/sell/post/status/edit/save',
            {
            loginId: dec.loginId,
            title: 'test',
            },
            {
            headers: {
                Authorization: token,
            },
            }
        );

        console.log(`Response: ${response.data}`);
        if (isToggled === 'sold') {
            setToggled('sell');
        } else {
            setToggled('sold');
        }
        } catch (error) {
        console.log('Error:', error);
        }
    };

    return (
        <Container>
        <ToggleBtn isToggled={isToggled} onClick={handleToggle}>
            {isToggled === 'sell' ? '판매중' : '판매보류'}
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
        isToggled === 'sell' ? '#3CB371' : '#ccc'};

    cursor: pointer;

    border : 0px;

    font-family: tway, sans-serif, Arial;

    transition: background-color 0.3s ease-in-out;
`;
