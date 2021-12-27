// Custom hook to fetch data

import { useEffect, useState } from "react";




const useFetch = (url) =>{

        const [data, setdata] = useState(null)
        const [isPending, setisPending] = useState(true) // Conditional Loading

    useEffect(() =>{
        fetch(url)
        .then(res =>{
            return res.json();
        })
        .then (data =>{
            setdata(data)
            console.log(data)

            setisPending(false) // when the data comes it sets the laoding to fals
    })
},[url]);

return {data, isPending}

}

export default useFetch ;