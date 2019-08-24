import React from 'react'

 const Greed =(props)=>{
     const {name,age} = props
    return <h2>Hi {name} your age : {age}</h2>
}

 const Test =()=>{

    return <h1> Second functions </h1>
}

export {Greed,Test}