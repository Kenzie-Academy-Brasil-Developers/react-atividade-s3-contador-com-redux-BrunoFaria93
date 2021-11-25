import { useState } from "react";
import { useSelector } from "react-redux";
import styles from './styles.css'
import { useDispatch } from "react-redux";
import { addNumber, subNumber } from '../../store/modules/counter/actions'
const Display = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.result);

  return (
    <div className='container'>
        <span>{result}</span>
        <div className='botoes'>
            <button onClick={() => dispatch(addNumber(1))}>+</button>
            <button onClick={() => dispatch(subNumber(1))}>-</button>
        </div>
        
    </div>
  );
};

export default Display;