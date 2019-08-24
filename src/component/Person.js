import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h5>id : {person.id} name : {person.name} age : {person.age} skill : {person.skill}</h5>
        </div>
    )
}
