import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import dataUtility from './utilities/dataUtility';

const api = axios.create({
  baseUrl: 'http://localhost:3000/',
})

function App () {
  const baseUrl = 'http://localhost:3000/'
  const headers = {
    'Access-Control-Allow-Origin': 'true',
    'Content-Type': 'application/json',
  }
  // const getData = async () => {
  //   await dataUtility('get', '/items', {})
  //     .then((res) => {
  //       console.log('res:', res.data)
  //     })
  // }
  axios.get(`${baseUrl}items`, headers)
      .then((res) => {
      console.log('res:', res.data)
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
