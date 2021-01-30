import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByValue } from '../store/actions';

function Counter() {

    // let [counter, setCounter] = useState(0);
    let [value, setValue] = useState(0);
    let counter = useSelector((state) => {
        return state.counter
    })
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                Counter: {counter}
            </div>
            <div>
            Value: {value}
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <div>
                <input type='text' onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => dispatch(incrementByValue(value))}>Update by Value</button>
            </div>

        </div>
    )
}

export default Counter
