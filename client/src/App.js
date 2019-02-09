import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Newsfeed from './components/Newsfeed'
import Search from './components/pages/Search/index.js'
import Landing from './components/pages/Landing/index.js'
import Artistbooking from './components/Artistbooking'
import Profilesetup from './components/pages/Profilesetup/index.js'
import Artistfollow from './components/Artistfollow'
import Artistfollowers from './components/Artistfollowers'
import Artistpend from './components/Artistpend'
import Userpend from './components/Userpend'
import Userfollowers from './components/Userfollowers'
import Userfollow from './components/Userfollow'
import Upload from './components/Upload'
import Profilebox from './components/Profilebox'
import Container from './components/Container'




class App extends Component {
  render() {
    return (
      <div className="container>">
      <Header />
      <Navbar />
      <Landing />
      <Profilesetup />
      <Search />
      <Artistfollow />
      <Artistfollowers />
      <Artistpend />
      <Artistbooking />
      <Userpend />
      <Userfollowers />
      <Userfollow />
      <Profilebox />
      <Newsfeed />
      <Upload />
      <Footer />
      </div>
    );
  }
}

export default App;
