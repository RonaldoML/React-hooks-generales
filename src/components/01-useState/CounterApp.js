import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1, counter2} = state;

    console.log(counter1)
    return (
        <div>

            <h1>Counter app</h1>
            <hr></hr>
            <strong>Cuenta: </strong>
            <p>Counter 1: {counter1} </p>
            <p>Counter 2: {counter2} </p>
            <button
                className="btn btn-primary"
                onClick={() => setState({
                    ...state,
                    counter1: counter1+ 1
                })}
            >+1</button>

        </div >
    )
}
