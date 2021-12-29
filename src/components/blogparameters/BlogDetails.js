import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {

    const { id } = useParams();

    return (
        <div className='blogdetails'>
            <h2>blog details - {id} </h2>
        </div>
    )
}
