
import { useDispatch, useSelector } from 'react-redux';
import { css, styled } from 'styled-components';
import { saveViewStatus } from '../../action/view_status';
import { RootState } from '../../reducer';


export default function ViewToggle() {

  const dispatch = useDispatch();

  const all = () =>{
    dispatch(saveViewStatus('list')); 

  }

  const on = () =>{
    dispatch(saveViewStatus('on/list'));  

  }

  const off = () =>{
    dispatch(saveViewStatus('off/list'));  

  }
  const viewStatus = useSelector(
    (state: RootState) => state.ViewStatusReducer.viewStatusData
);

  return (
    <Container>
      <AllButton status={viewStatus} onClick={all}>
        전체
      </AllButton>

      <OnButton status={viewStatus} onClick={on}>
        판매중
      </OnButton>

      <OffButton status={viewStatus} onClick={off}>
        판매완료
      </OffButton>

    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface ButtonProps {
  status: string; // This variable will determine the background color
}

const AllButton = styled.button<ButtonProps>`
border : 0px;

font-size:15px;
font-family : 'tway';

padding : 10px;

background-color : transparent;

${(props) =>
    props.status === 'list' &&
    css`
      background-color: #c2c2c2;
    `};
cursor : pointer;

margin-left : 15px;

`

const OnButton = styled.button<ButtonProps>`
border : 0px;

font-size:15px;
font-family : 'tway';

padding : 10px;

background-color : transparent;

${(props) =>
    props.status === 'on/list' &&
    css`
      background-color: #c2c2c2;
    `};
cursor : pointer;

margin-left : 15px;

`

const OffButton = styled.button<ButtonProps>`
border : 0px;

font-size:15px;
font-family : 'tway';

padding : 10px;

background-color : transparent;

${(props) =>
    props.status === 'off/list' &&
    css`
      background-color: #c2c2c2;
    `};
cursor : pointer;

margin-left : 15px;

`