import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './components/pages/Landing'
import Profilebox from './components/Profilebox'
import Post from './components/Post'
import Newsfeedcontainer from './components/pages/Newsfeedcontainer/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container>">


          <Switch>
            <Route exact path="/newsfeed" render={(props) => <Newsfeedcontainer {...props} />} />
            <Route exact path="/profilebox" component={Profilebox} />
<<<<<<< HEAD
            <Route exact path="/" render={(props) => <Landing {...props}/>} />
=======
            <Route exact path="/post" component={Post} />
            <Route exact path="/" component={Landing} />
>>>>>>> 1f2412153fbbaa29c02ec2fb39a5458f49035d58
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;