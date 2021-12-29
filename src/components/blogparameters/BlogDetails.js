import React from 'react'
import { useParams } from 'react-router-dom'
import Output from '../Custom-hook/Output';
import useFetch from '../Custom-hook/useFetch';

export default function BlogDetails() {

    const { id } = useParams();
    const { data, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className='blogdetails'>
            {isPending && <div>Loading...</div>}
            {data && <div>
                <h2> {data.title} </h2>
                <p>Written by {data.author} </p>
            </div>}
        </div>
    )
}
