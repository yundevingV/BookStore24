import React from 'react';
import { useDispatch } from "react-redux";
import { styled } from 'styled-components';
import { savePaging } from '../../action/paging_status';

interface PagingProps {
  totalPages?: number;
}
 
export default function Paging({ totalPages }: PagingProps) {

    const dispatch = useDispatch();


    if (totalPages === undefined || totalPages <= 0) {
        return null;
    }

    const page = (index : number) => {
        console.log(index)
        dispatch(savePaging(index))

    }

    const renderButtons = () => {
        const buttons = [];
        for (let index = 1; index <= totalPages; index++) {
        buttons.push(
            <Button key={index} onClick={()=>page(index-1)}> {index} </Button>
        );
        }
        return buttons;
    };

    return (
        <div>
        {renderButtons()}
        </div>
    );
}

const Button = styled.button`
width : 30px;
height : 30px;
`