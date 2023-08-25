import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { savePaging } from '../../action/paging_status';

interface PagingProps {
  totalPages?: number;
}

interface ButtonProps {
  selected?: boolean;
}

export default function Paging({ totalPages }: PagingProps) {
    const dispatch = useDispatch();
    const [selectedPage, setSelectedPage] = useState<number | null>(null);

    if (totalPages === undefined || totalPages <= 0) {
        return null;
    }

    const page = (index: number) => {
        console.log(index);
        dispatch(savePaging(index));
        setSelectedPage(index);
    }

    const renderButtons = () => {
        const buttons = [];
        for (let index = 1; index <= totalPages; index++) {
            buttons.push(
                <Button
                    key={index}
                    onClick={() => page(index - 1)}
                    selected={selectedPage === index - 1}
                >
                    {index}
                </Button>
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

const Button = styled.button<ButtonProps>`
    width: 30px;
    height: 30px;
    margin: 0px 1px;
    border: 0px;
    background: transparent;

    ${(props) =>
        props.selected &&
        `
        background: #5a82af;
        color: #fff;   
        `
        
    }
    
    &:hover {
        background: #e2e2e2;
        color : #000;
        cursor: pointer;
    }
`;
