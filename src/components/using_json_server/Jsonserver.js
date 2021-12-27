import React,{useEffect,useState} from 'react'
import JsonServerOutput from './JsonServerOutput';


export default function Jsonserver() {

    const [blogs, setblogs] = useState(null)

    useEffect(() =>{
        fetch('http://localhost:8000/blogs/')
        .then(res =>{
            return res.json();
        })
        .then (data =>{
            setblogs(data)
            console.log(data)
        });
    },[]);

    return (
        <div className='blog'>
            {blogs && <JsonServerOutput blog={blogs} />}
        </div>
    )
}
