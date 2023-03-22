import React from 'react';
import './App.css';
import axios from 'axios';
import CitySearch from './Components/CitySearch';
import CityMap from './Components/CityMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityLat: '',
      cityLong: '',
      error: false,
      errorMessage: '',
      weatherData: [],
      city: ''
    }
  }

  submitCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {

      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let axiosData = await axios.get(url);

      this.setState({
        cityName: axiosData.data[0].display_name,
        cityLong: axiosData.data[0].lon,
        cityLat: axiosData.data[0].lat,
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${axiosData.data[0].lat},${axiosData.data[0].lon}&zoom=12&size=450x450`,
        error: false
      });
      
      let lat = axiosData.data[0].lat;
      let lon = axiosData.data[0].lon;

      this.handleGetWeather (lat, lon);

    } catch(error) {
        this.setState({
          error: true,
          errorMessage: error.message
        })
    }
  }
  
  handleGetWeather = async (lat, lon) => {
    
    try {
      
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.city}&lat=${lat}&lon=${lon}`;

      let axiosWeatherData = await axios.get(weatherUrl);
      
      this.setState({
        weatherData: axiosWeatherData.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    // console.log(this.state);
    // console.log('CityName:', this.state.cityName);
    return (

      <>
        <h1>City Locator</h1>
        <CitySearch submitCity={this.submitCity} getCityData={this.getCityData} error={this.state.error} errorMessage={this.state.errorMessage} />
        <CityMap cityLat={this.state.cityLat} cityLong={this.state.cityLong} mapUrl={this.state.mapUrl} cityName={this.state.cityName} />
      
      </>
    )
  }
}


export default App;
