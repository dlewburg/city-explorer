import React from 'react';
import './App.css';
import axios from 'axios';
import CitySearch from './Components/CitySearch';
import CityMap from './Components/CityMap';
import Weather from './Components/Weather';
import Movies from './Components/Movies';

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
      city: '',
      max_temp: '',
      min_temp: '',
      movieData: [],
      movieError: false,
      movieErrorMessage: '',
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

      const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

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

      this.handleGetMovies();

    } catch(error) {
        this.setState({
          movieError: true,
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
    }
  }

  handleGetMovies = async () => {

    try{

      let movieUrl = `${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.city}`;
      let axiosMovieData = await axios.get(movieUrl);
      
      this.setState({
        movieData: axiosMovieData.data,
        error: false,
        movieErrorMessage: 'NO RELATED MOVIES'

      })

    } catch (error) {
      this.setState({
        error: true,
        movieErrorMessage: error.message
      })
    }
  }

  render() {
    return (

      <>
        <h1>City Locator</h1>
        <CitySearch submitCity={this.submitCity} getCityData={this.getCityData} error={this.state.error} errorMessage={this.state.errorMessage} />
        <CityMap cityLat={this.state.cityLat} cityLong={this.state.cityLong} mapUrl={this.state.mapUrl} cityName={this.state.cityName} />
        <Weather weatherData={this.state.weatherData}/>
        <Movies movieData={this.state.movieData} cityName={this.state.cityName} errorMessage={this.state.movieErrorMessage}/>
      
      </>
    )
  }
}


export default App;
