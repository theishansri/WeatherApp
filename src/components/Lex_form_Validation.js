import React, { Component } from 'react'

class Lex_form_Validation extends Component {
    constructor() {
        super()
    
        this.state = {
            valid_BookId:false,
            valid_Author:false,
            valid_Desc:false,
             ErrorAuthorName:"",
             ErrorBookId:"",
             ErrorDesc:"",
             success:""
             
        }
        // this.handleBookId=this.handleBookId.bind(this)
    }
    handleBookId=(event)=>{
        const bookid=event.target.value;
        if(bookid<=100){
            this.setState({
                ErrorBookId:"This field has to be greater than 100",
                valid_BookId:false
            })
        }
        else{
            this.setState({
                ErrorBookId:"",
                valid_BookId:true
            })
        }
    }
    handleAuthor=(e)=>{
        const auth=e.target.value
        if(auth.length<5){
            this.setState({
                ErrorAuthorName:"Author Name length >5",
                valid_Author:false
            })
        }
        else{
            this.setState({
                ErrorAuthorName:"",
                valid_Author:true
            })
        }
    }
    handleDesc=(e)=>{
        const desc=e.target.value
        if(desc.length<50){
            this.setState({
                ErrorDesc:"Minimum charecters should be 50",
                valid_Desc:false
            })
        }
        else{
            this.setState({
                ErrorDesc:"",
                valid_Desc:true
            })
        }
        }
        handleSubmit=(e)=>{
            this.setState({
                success:"Author added successfully"
            })  
            e.preventDefault();
            
        }

    
    render() {
        return (
            <div>
                <form >
                    <div className="form-group">
                        <label htmlFor="bookId">BookId</label>
                        <input type="number" className="form-control" placeholder="Enter BookId"
                         onChange={this.handleBookId}/><br/>
                         <span style={{color:"red"}}>{this.state.ErrorBookId}</span>
                    {/* <label for="BookId">BookId</label> */}
                    <br />
                        <label htmlFor="Author">Author</label>
                        <input type="text" className="form-control" placeholder="Enter Author Name" onChange={this.handleAuthor}/>
                        {/* <lable for="Author">Author</lable> */}
                        <br />
                        <span style={{color:"red"}}>{this.state.ErrorAuthorName}</span>
                        <br />
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" placeholder="Enter Description" onChange={this.handleDesc}/>
                        <br/>
                        <span style={{color:"red"}}>{this.state.ErrorDesc}</span>
                        <br/>
                        <button type="button" className="btn btn-success" onClick={this.handleSubmit} disabled={!(this.state.valid_BookId&&this.state.valid_Author&&this.state.valid_Desc)}>Add Author</button>
                        <br/><span style={{color:"green"}}>{this.state.success}</span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Lex_form_Validation
