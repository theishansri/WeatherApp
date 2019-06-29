import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div style={{visibility:this.props.error?'hidden':'visible'}}>
        <br />
        <p 
          className="card"
          
        >
          
          <b>City Name: </b>
          {this.props.city}
          <br />
          <br />
          <strong>Country Name: </strong>
          {this.props.country}
          <br />
          <strong>Avg Temperature: </strong>
          {this.props.temperature}
          {"\u00b0"}C<img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
          <br />
          <strong>Minimum Temperature: </strong>
          {this.props.min_temperature}
          {"\u00b0"}C<img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
          <br />
          <strong>Maximum Temperature: </strong>
          {this.props.max_temperature}{"\u00b0"}C<img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
          
          <br />
          <strong>Humidity: </strong>
          {this.props.humidity}
          <br />
          <br/>
          <strong>Weather Description: </strong>
          {this.props.description}
          <br />
        </p>
      </div>
    );
  }
}

export default Weather;
