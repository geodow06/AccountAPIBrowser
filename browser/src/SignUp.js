import React, { Component } from 'react';
import './App.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname: '',
          requestResponse: ''
        }
      } 
      pushRequest=()=>{ 
          console.log(this.state.firstname, this.state.lastname)
      }
      setStates = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
      handleSubmit = (event) => {
        event.preventDefault();
      }
      print = ()=>{ 
          console.log("it worked")
      }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <p>erabhr</p>
        </header>  */}
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label className="required"></label>
          <label>
            <input type="text" name='firstname' target='one' className="form-control inputArea" onChange={this.setStates} firstname={this.state.firstname} id="Firstname" placeholder="firstname *"></input>
            <input type="text" name='lastname' target='two' className="form-control inputArea" onChange={this.setStates} lastname={this.state.lastname} id="Lastname" placeholder="lastname *"></input>
          </label>
          <input type="submit" value="Submit" onClick={this.pushRequest} />
        </form> 
        <button onClick={this.print}>thjrsjtr</button>
         
      </div>
    );
  }
}

export default SignUp;