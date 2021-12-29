import React from 'react'
import { Link } from 'react-router-dom'

export default function List_output(props) {
    return (
        <div>
            {props.blog.map((element)=>(
                <div className='blogpreview' key={element.id}>
                <Link to={`/blogs/${element.id}`}>
                    <h2> {element.title} </h2>
                    <h2> {element.author} </h2></Link>
                </div>                    
            ))}
        </div>
    )
}
