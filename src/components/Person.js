import React from 'react'

function Person({p}) {
    return (
        <div>
            I am {p.name}. I am {p.age} years old. I know {p.skill}
        </div>
    )
}

export default Person
