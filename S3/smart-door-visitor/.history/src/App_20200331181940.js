import React from 'react';
import './App.css';
import SLogo from './SLogo.png'
import Left from './Left.png'
import './accessStatus';
var apigClientFactory = require('./apigClient').default;

class SmartDoor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      otp: '',
      apigClient: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        otp: event.target.value
      }
    );
  }

  handleSubmit(event) {
    let otp = {
      "otp": (this.state.otp)
    }

    console.log(otp)
    event.preventDefault();
    this.state.apigClient.chatbotPost(null, otp)
    .then((response) => {
      console.log(response)
      if(true){
        this.props.history.push('/accessStatus/');
    }
    })
    .catch((result) => {
      console.error(result);
    });
  }

  componentDidMount() {
    var apigClient = apigClientFactory.newClient({
      apiKey: '1GCbDvztk99qUxAl6EVc91k2qWvNor9G8BV9ZOvO'
    });

    this.setState({
      apigClient : apigClient
    });
  }

  render() {
    return (
      <div className="App">
      <img src={Left} className="Left-img" alt = ""/ >  
        <img src={SLogo} className="S-logo" alt = ""/>   
        <label className="text-label">Please enter the OTP</label>
         <label className="otp-label">OTP</label>
          <input 
            type="text" 
            onChange={this.handleChange}
            className="otp-input" 
            placeholder="******"></input>
          <button className="unlock-button" onClick={this.handleSubmit}>UNLOCK</button>
      </div>
    );
  }
}

function App() {

  return (
    <div className="App">
      <SmartDoor/>
    </div>
  );
}

export default App;
