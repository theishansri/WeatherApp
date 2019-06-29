import React, { Component } from 'react'

export class ErrorComponent extends Component {
    render() {
        return (
            <div>
                <p style={{color:'red'}}>Please check the city name and country</p>
            </div>
        )
    }
}

export default ErrorComponent
