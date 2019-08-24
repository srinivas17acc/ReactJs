import React from 'react'
import  './myStyle.css'

export default function StyleSheet(props) {
    
     let className = props.primary ? 'primary' : ''

    return (
        <div>
            <h3 className = {`${className} font-xl`}>My StyleSheet</h3>
        </div>
    )
}
