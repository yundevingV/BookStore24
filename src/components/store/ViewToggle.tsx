
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { saveViewStatus } from '../../action/view_status';


export default function ViewToggle() {

  const dispatch = useDispatch();

  const all = () =>{
    dispatch(saveViewStatus('all')); 
 
  }

  const on = () =>{
    dispatch(saveViewStatus('on'));  

  }

  const off = () =>{
    dispatch(saveViewStatus('off'));  

  }


  return (
    <div>
      <button onClick={all}>
        전체
      </button>

      <button onClick={on}>
        판매중인 상품
      </button>

      <button onClick={off}>
        판매완료된 상품
      </button>
    </div>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;




