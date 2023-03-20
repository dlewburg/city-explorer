import React from 'react';
import './App.css';
import axios from 'axios';
import CitySearch from './Components/CitySearch';
import CityMap from './Components/CityMap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityName: '',
      cityLong: '',
      cityLat: '',


    }
  }

  submitCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();
    
    const url =`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
    
    let axiosData = await axios.get(url);
    
    this.setState({
      cityName: axiosData.data[0].display_name,
      cityLong: axiosData.data[0].lon,
      cityLat: axiosData.data[0].lat,
      mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${axiosData.data[0].lat},${axiosData.data[0].lon}&zoom=13&size=450x450`
    })
  }
  
  render() {
    // console.log(this.state);
    // console.log(this.state.cityName);
    return (
      
      <>
      <h1>City</h1>
      <CitySearch submitCity={this.submitCity} getCityData={this.getCityData}/>
      <CityMap cityLong={this.state.cityLong} cityLat={this.state.cityLat} mapUrl={this.state.mapUrl} cityName={this.state.cityName}/>
      </>
    )
  }
}


export default App;
