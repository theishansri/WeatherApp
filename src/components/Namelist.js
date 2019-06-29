import React from 'react'
import Person from "./Person"
function Namelist() {
    const names=['Bruce', 'Clark', 'Diana', 'Bruce']
    const Persons=
    [
        {
            id:1,
            name:"Ishan",
            age:30,
            skill:"React"
        },
        {
            id:2,
            name:"Zishan",
            age:15,
            skill:"Nothing"
        },
        {
            id:3,
            name:"Rupesh",
            age:14,
            skill:"Washing"
        }
    ]
    const Personslist=names.map((p,index)=><h2 key={index}> {p}</h2> )
    return (
        <div>
            {
                Personslist
            }
            
        </div>
    )
}

export default Namelist

