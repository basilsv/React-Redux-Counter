
import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement, incrementby5} from '../redux/counter/counterAction'


const Counter = () => {
    const count = useSelector((state)=>state.count)
    const count2 = useSelector((state)=>state.count2)
    const dispatch = useDispatch()
return(
    <div>
        <h1>Counter</h1>
        <h3>Count : {count}</h3>
        <button
        onClick={()=>dispatch(increment())}>Increment</button>

<button
        onClick={()=>dispatch(decrement())}>Decrement</button><br></br>
       <h3> Count 2: = {count2}</h3>
       <button onClick = {()=>dispatch(incrementby5())}>Increment By 5</button>
    </div>
)
}

export default Counter;