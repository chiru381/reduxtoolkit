import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../redux/counterSlice';

export default function Counter() {
  //const count = useSelector((store) => store.counter.count);
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(50))}>Increment By 50</button>
    </div>
  )
}
