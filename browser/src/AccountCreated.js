import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class AccountCreated extends Component {
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
    

   
  render() {
    return (
        <div>gheragh</div>
    );
  }
}

export default AccountCreated;