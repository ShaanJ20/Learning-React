import React from 'react'

import Child from './Child';

export default function Parent() {
    function HelloWorld() {
        console.log('Hello');
    }
    return (
        <div>
            <Child HelloWorld= {HelloWorld} />
        </div>
    )
}
