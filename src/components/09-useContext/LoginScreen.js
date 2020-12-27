import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const u = {
        id: 2,
        nombre: 'Alberto',
        email: 'ab@gmail.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => setUser( u )}
            >
                Login
            </button>
        </div>
    )
}
