import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Newsfeed from './components/pages/Newsfeed/index.js'
import Request from './components/pages/AppointmentRequest/index'
import Search from './components/pages/Search/index.js'
import Landing from './components/pages/Landing/index.js'
import Booking from './components/pages/Booking/index.js'
import Upload from './components/pages/Upload/index.js'

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <Navbar />
      <Search />
      <Landing/>
      <Newsfeed />
      <Request />
      <Booking />
      <Upload />
      <Footer />
      </div>
    );
  }
}

export default App;
