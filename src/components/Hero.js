import React from 'react'


function Hero({HeroName}) {
    if(HeroName==="Joker"){
        throw new Error('Not a hero')
    }
    return (
        <div>
            {HeroName}
        </div>
    )
}

export default Hero
