import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <hr/>
        <Footer href={'https://moikrug.ru/etnolover'}/>
      </div>
    );
  }
}

export default App;
