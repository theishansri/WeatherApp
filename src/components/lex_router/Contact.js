import React, { Component } from 'react'

 class Contact extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>Get In touch with us</h1>
                <br/>
                <br/>
                <h2>We are open from 9:00am to 9:00pm all 7 days</h2>
                <br/>
                <br/>
                <h4>Or contact us at:-</h4>
                <ul className="list-unstyled">
                    <li>Email: xyz@gmail.com</li>
                    <li>patron Help: +91 677 8765 342</li>
                </ul>
            </div>
        )
    }
}

export default Contact
