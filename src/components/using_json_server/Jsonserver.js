import React,{useEffect,useState} from 'react'
import JsonServerOutput from './JsonServerOutput';


export default function Jsonserver() {

    const [blogs, setblogs] = useState(null)
    const [isPending, setisPending] = useState(true) // Conditional Loading

    useEffect(() =>{
                fetch('http://localhost:8000/blogs/')
                .then(res =>{
                    return res.json();
                })
                .then (data =>{
                    setblogs(data)
                    console.log(data)
        
                    setisPending(false) // when the data comes it sets the laoding to fals
            })
    },[]);

    return (
        <div className='blog'>
            {/* Loading when is pending is true */}
            {isPending && <div>Loading..</div>} 
            {blogs ? <JsonServerOutput blog={blogs} /> : null}

        </div>

    )
}
