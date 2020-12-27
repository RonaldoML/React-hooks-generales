import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coors;

    useEffect(() => {

        const mousemove = (e) => {

            const coors = { x: e.x, y: e.y };

            setCoords(coors);

        };

        window.addEventListener('mousemove', mousemove)

        return () => {
            window.removeEventListener('mousemove', mousemove);
        }
    }, [])


    return (
        <div>
            <h3>Genial</h3>

            <p>x: {x}, y: {y}</p>

        </div>
    )
}
