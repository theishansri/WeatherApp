import React, { Component } from "react";



class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       city_err:true,
       country_err:true
    }
    console.log(this.state.city_err&&this.state.country_err)
  }
  cityval=(e)=>{
    if(e.target.value!=null){
      this.setState({city_err:false})
    }
  }
  countryval=(e)=>{
    if(e.target.value!=null){
      this.setState({country_err:false})
    }
  }
  render() {
    
    
    return (
      <form onSubmit={this.props.getWeather}>
        <div className="col-xs-12">
          <input
            className="form-control"
            width="190%"
            type="text"
            name="city"
            onChange={this.cityval}
            placeholder="Enter City Here.." autoFocus
          />
          <br/>

            <input
              className="form-control"
              type="text"
              name="country"
              placeholder="Enter the Country..." onChange={this.countryval}
            />
            <br/>
          <button className="btn btn-success" disabled={(this.state.city_err||this.state.country_err)} >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
