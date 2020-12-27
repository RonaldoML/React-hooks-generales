import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <div>
            <h1>Counter with custom hook</h1>
            <hr></hr>

            <strong>Contador: {state}</strong>
            <br/>

            <button className="btn btn-primary" onClick={ () => increment(10)}>+1</button>
            <button className="btn btn-secundary" onClick={ reset }>Reset</button>
            <button className="btn btn-danger" onClick={ () => decrement(20)}>-1</button>

        </div>
    )
}
