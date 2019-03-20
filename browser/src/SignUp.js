import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname: '', 
          account:{firstname:'',lastname:''}, 
          accountNumber:'',
          requestResponse: ''
        }
      } 
      pushRequest=()=>{ 
          axios.post(`/createAccount`,this.state.account).then(r => {
              this.setState({requestResponse: r.data})
          })
      } 
    //   .then(this.setState({accountNumber:this.state.requestResponse.accountNumber}))
      setStates = (event) => {

const dummy = {
    firstname : this.state.account.firstname,
    lastname : this.state.account.lastname
};


if (event.target.id === "Firstname"){
    dummy.firstname = event.target.value;
}
if (event.target.id === "Lastname"){
    dummy.lastname = event.target.value;
}
this.setState({account:dummy});
      
      
        

      }
      
      handleSubmit = (event) => {
        event.preventDefault();
      }
   
  render() {
    return (
      <div className="App">
      <p>{this.state.account.firstname}</p>
      <p>{this.state.account.lastname}</p> 
      <p>Sup {this.state.requestResponse.firstname} your account number is {this.state.requestResponse.accountNumber}</p>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label className="required"></label>
          <label>
            <input type="text" name='firstname' target='one' className="form-control inputArea" onChange={this.setStates} id="Firstname" placeholder="firstname *"></input>
            <input type="text" name='lastname' target='two' className="form-control inputArea" onChange={this.setStates}  id="Lastname" placeholder="lastname *"></input>
          </label>
          <input type="submit" value="Submit" onClick={this.pushRequest} />
        </form> 
       
         
      </div>
    );
  }
}

export default SignUp;