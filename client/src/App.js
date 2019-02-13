import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './components/pages/Landing'
// import SignIn from './components/pages/SignIn'
// import SignUp from './components/pages/SignUp'
import Profilebox from './components/Profilebox'
import Newsfeedcontainer from './components/pages/Newsfeedcontainer/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container>">


          <Switch>
            <Route exact path="/newsfeed" render={(props) => <Newsfeedcontainer {...props} />} />
            <Route exact path="/profilebox" component={Profilebox} />
            <Route exact path="/" render={(props) => <Landing {...props}/>} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;