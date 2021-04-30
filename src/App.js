import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
//import Contact from './components/Contact'
//import React,{ useState,useEffect }        from 'react';
//import fire from './fire';
//import Test from './components/section/Test';
//import './App.css'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.handleLogout = props.handleLogout;
  }
  
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header handleLogout = {this.handleLogout}/>
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}


export default App;
