import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             userName:""
        }
    }
    handleUserName=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserName}/>
                    MY Name is{this.state.userName}
                </div>
            </form>
        )
    }
}

export default Form
