import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./ErrorComponent"
const API_KEY = "411e4507abfb591a82760415c19daec4";
class Titles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            temperature: undefined,
            City: undefined,
            Country: undefined,
            Humidity: undefined,
            Description: undefined,
            min_temperature: undefined,
            max_temperature: undefined,
            error: true,
            undefined_error:false,
            icon:undefined
          };
          this.getWeather=this.getWeather.bind(this);
        }
        
    
    

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    
    const data = await api_call.json();
    
    console.log(data);
   
   if(data['cod']===200){
       console.log(data['cod'])
    this.setState({
    icon:data.weather[0].icon,
      temperature: data.main.temp,
      City: data.name,
      Country: data.sys.country,
      Humidity: data.main.humidity,
      Description: data.weather[0].description,
      min_temperature: data.main.temp_min,
      max_temperature: data.main.temp_max
    });
    if (
      this.state.temperature !== undefined &&
      this.state.City !== undefined &&
      this.state.Country !== undefined &&
      this.state.Humidity !== undefined &&
      this.state.Description !== undefined &&
      this.state.min_temperature !== undefined &&
      this.state.max_temperature !== undefined
    ) {
      this.setState({ error: false });
    }
  }
  else{
      this.setState({undefined_error:true})
  }
}



  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-4">
                  <span className="a" >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span style={{float:'left'}}>
                    <h1 >Weather Details:</h1><br/> <h3>Find Weather and Temperature of Anywhere</h3>
                    </span>
                  </span>
                  <br />
                </div>
                <div className="col-xs-3"></div>
                <div style={{marginTop:"160px",float:'right'}} className="col-xs-5 form-container">
                  <Form  getWeather={this.getWeather} city={this.state.City} Country={this.state.Country}/>
                  <br/>
                  {this.state.undefined_error?<Error/>:                                    
                  <Weather style={{marginTop:'30px'}}
                    temperature={this.state.temperature}
                    city={this.state.City}
                    country={this.state.Country}
                    humidity={this.state.Humidity}
                    description={this.state.Description}
                    min_temperature={this.state.min_temperature}
                    max_temperature={this.state.max_temperature}
                    icon={this.state.icon}
                    error={this.state.error}
                  />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Titles;
