

import React, { useEffect, useState } from 'react'

import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    //Sin el [] el useEffect se dispara cada vez que algo cambia en el componente
    //Y se dispara solo cuando se crea el formulario
    useEffect(() => {
        // console.log('hey')
    }, []);

    useEffect(() => {
        // console.log('formState cambió')
    }, [formState])

    useEffect(() => {
        // console.log('email cambió')
    }, [email])

    const handleInputChange = ({ target }) => {

        setformState({
            ...formState,
            [target.name]: target.value
        })

    }


    return (
        <div>
            <h1>useEffect</h1>
            <hr></hr>

            <div className="form-group">

                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

            </div>

            { (name=== '123') && <Message></Message>}

        </div>
    )
}
