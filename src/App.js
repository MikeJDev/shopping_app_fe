import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import dataUtility from './utilities/dataUtility';

function App () {
  // const getData = async () => {
  //   await dataUtility('get', '/')
  //     .then((res) => {
  //       console.log('res:', res)
  //     })
  // }
    axios.get('/')
    .then((res) => {
    console.log('res:', res)
    })
    // useEffect(() => {
    //   getData()
    // }, [])
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
