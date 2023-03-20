import './App.css';
import axios from 'axios';
import Form from 'react/bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      city: '',
      cityData: {}
    })
  }

  handleCityInput = async (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData

  render() {
    return (

      <>
      <h1>City</h1>
        <Form>

        </Form>
      </>


    )
  }
}

export default App;
