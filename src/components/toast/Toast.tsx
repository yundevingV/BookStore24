import { useEffect } from "react";
import { styled } from "styled-components";

interface ToastProps {
    setToast : React.Dispatch<React.SetStateAction<boolean>>,
    text : string,
}

const ToastContainer = styled.div`
width : 120px;
height : 20px;
background : #e0e0e0;

display : flex;
align-items : center;
justify-content : center;

position: absolute;
  right: 0;
  bottom: 0;

padding : 10px;

border-radius : 12px;
p {
    color : #000;
    font-family : tway;
    font-size : 15px;
}
`



export default function Toast({ setToast, text } : ToastProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastContainer>
      <p>{text}</p> 
    </ToastContainer>
  );
}

