import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Vishawas"
        }
        console.log("LIfecycle construcotr")
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerived State')
        return null
    }
    componentDidMount(){
        console.log("Inside component did mount")
    }
    shouldComponentUpdate(){
        console.log('Inside should compoent update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotbeforeupdate')
        return null
    }
    componentDidUpdate(){
        console.log('compoent did update')
    }
    changestate=()=>{
        this.setState({
            name:"Ishan"
        })
    }
    render() {
        console.log("LifeCycle render")
        return (
            <div>
                
                <h2>LifeCycle in render</h2>
                <h6>{this.state.name}</h6>
                <button onClick={this.changestate}>change state</button>
            </div>
        )
    }
}

export default LifeCycle
