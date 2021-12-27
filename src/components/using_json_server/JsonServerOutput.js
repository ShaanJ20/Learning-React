import React from 'react'

export default function JsonServerOutput(props) {
    return (
        <div>
            {props.blog.map((element)=>(
                <div className='blogpreview' key={element.id}>
                    <h2> {element.title} </h2>
                    <h2> {element.author} </h2>
                </div>                    
            ))}
        </div>
    )
}
