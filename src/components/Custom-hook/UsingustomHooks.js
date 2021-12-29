import React from 'react'
import Output from './Output'
import useFetch from './useFetch'
import { useParams } from 'react-router-dom'


export default function UsingustomHooks() {

    const { id } = useParams();

    const { data, isPending } = useFetch('http://localhost:8000/blogs/')

    return (
        <div>
            {isPending && <div>Loding...</div>}
            {data && <Output blog={data}/>}
        </div>
    )
}
