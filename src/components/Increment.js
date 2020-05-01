import React, { useState, useEffect } from 'react'
import randomcolor from "randomcolor"
import "../increment.css"

function Increment() {
    const [count,setCount] = useState(0)
    const [color,setColor] = useState(randomcolor())
    
    useEffect(()=>{
        setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
    },[])

    useEffect(()=>{
        setColor(randomcolor())
    },[count])
    return (
        <div>
            <h1 style={{color:color}}>{count}</h1>
        </div>
    )
}

export default Increment