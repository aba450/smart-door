import React from 'react';
import './App.css';
import SLogo from './SLogo.png'
import Left from './Left.png'
import './SuccessPage';
// import { Redirect } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
var apigClientFactory = require('./apigClient').default;

class SmartDoor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      otp: '',
      apigClient: null,
      unlock: null
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
    .then((response) => this.setState(() => ({
      unlock: true
    })))
    .catch((result) => {
      console.error(result);
    });

    console.log(this.state.unlock)
    // return <Redirect to="./SuccessPage.js"/>
    if (this.state.unlock) {

      return (
      //   <div class="alert alert-success">
      //   <strong>Success!</strong> Indicates a successful or positive action.
      // </div>
      <div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  This is an alert box.
</div>
      // alert("success")
      )
    }
  
    else {
      // alert("Denied")
      return (
        <div class="alert alert-danger">
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>
      )
    }
    
    
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
