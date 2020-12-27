import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';


export const Memorize = () => {


    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <p>Contador: <Small value={counter}/></p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
