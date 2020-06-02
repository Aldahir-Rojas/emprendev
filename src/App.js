import React, { Component } from 'react';
import logo from './logo.svg';
import {Header} from "./components/Header"
import {Inicio} from "./components/Inicio"
import {Somos}from "./components/Somos"
import {Hacemos} from "./components/Hacemos"
import "bulma/css/bulma.css"
import './App.css';

class  App extends Component {


  render(){

  return (



    <div className="App">

            
            <Header/>
            <Inicio/>
            <Somos/>
            <Hacemos/>
    </div>



  );
  }
}

export default App;


/*




*/
