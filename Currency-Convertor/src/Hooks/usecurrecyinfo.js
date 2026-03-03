import { useEffect,useState} from "react";
import React from "react";

function usecurrecyinfo(currency){
    const [data,setData] = useState(null)
    useEffect(()=>{
        const Response = fetch(`https://open.er-api.com/v6/latest/${currency}`)
        const data = Response.json()
        console.log(data)
    },[currency])
    return data
}

export default usecurrecyinfo;