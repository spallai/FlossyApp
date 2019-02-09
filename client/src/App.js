import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './components/pages/Landing/index.js'
import Profilesetup from './components/pages/Profilesetup/index.js'
// import Newsfeed from "./components/pages/Newsfeed";
import Newsfeedcontainer from './components/pages/Newsfeedcontainer/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container>">
          <Navbar />

          <Switch>

            <Profilesetup />
            {/* <Search /> */}
            {/* <Route exact path="/newsfeed" component={Newsfeed} /> */}
            <Route exact path="/newsfeed" component={Newsfeedcontainer} />
            <Landing />

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
