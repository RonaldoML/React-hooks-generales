import { useEffect, useRef, useState } from "react"



export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        async function Fetch() {
            try {

                const resp = await fetch(url);
                const data = await resp.json();


                if (isMounted.current) {

                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }

            } catch (error) {
                setState({
                    loading: false,
                    error: 'No se pudo cargar la info',
                    data: null
                })
            }
        }

        Fetch();

    }, [url])

    return state;

}
