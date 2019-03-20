import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
import Home from './Home.js'; 
import SignUp from './SignUp';
import './App.css';
class MainRouter extends Component{
   render(){ 
    return(  
        <div> 
            <Router> 
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/SignUp">SignUp</NavLink>
                <Route exact path="/" component={Home}/>
                <Route path="/SignUp" component={SignUp}/>
            </Router>
        </div>
    );
  
   }
    
} 
export default MainRouter;