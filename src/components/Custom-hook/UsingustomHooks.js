import React from 'react'
import Output from './Output'
import useFetch from './useFetch'

export default function UsingustomHooks() {

    const { data, isPending } = useFetch('http://localhost:8000/blogs/')

    return (
        <div>
            {isPending && <div>Loding...</div>}
            {data && <Output blog={data}/>}
        </div>
    )
}
