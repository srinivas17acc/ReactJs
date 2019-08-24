import React from 'react'
import Person from './Person';

export default function NameList() {
    const names = ['sri' , 'prakash', 'prem']
    //const name = names.map(name => <h3>{name}</h3>)

    const persons = [
        {
            id : 1,
            name : 'srini',
            age : 26,
            skill : 'Java'
        },
        { 
            id :2,
            name : 'prakash',
            age : 23,
            skill : 'react'

        },
        { 
            id :3,
            name : 'prem',
            age : 23,
            skill : 'Network'

        }
    ]

     const personList = persons.map((person,index) => <Person key = {index} person = {person} />)

    return <div>{personList}</div>
        
}
