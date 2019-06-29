import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs=React.createRef()
    }
    componentDidMount(){
        this.inputRefs.current.focus()
    }
    clickHandler=()=>{
        console.log(this.inputRefs.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefs}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

