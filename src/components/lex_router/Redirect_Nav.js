import React, { Component } from 'react'
// import Home from "./Home"
import {Link,BrowserRouter} from "react-router-dom"

export class Redirect_Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to={"/Books"} className="navbar-brand">Learning Portal</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to={"/Books"}>View All Books</Link></li>
                            <li><Link to={"/AddAuthor"}>Add a Book</Link></li> 
                            <li><Link to={"/ContactUs"}>Contact Us</Link></li>
                        </ul>

                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Redirect_Nav
