import React, { useState } from 'react'
import Listoutput from './Listoutput'

export default function Home() {
    const [blogs, setblogs] = useState([
        {title:'abc',body:'asdasdasd',author:'shj',id:1},
        {title:'123',body:'sdfsdfvsgsgvs',author:'shj',id:2},
        {title:'sds',body:'sdfsdf',author:'shj',id:3}
    ])
    return (
        <div className='home'>
            <Listoutput blog={blogs}/>
        </div>
    )
}
