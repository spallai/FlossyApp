import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/pages/Login'
import Landing from './components/pages/Landing'
import Profilebox from './components/Profilebox'
// import Newsfeed from "./components/pages/Newsfeed";
import Newsfeedcontainer from './components/pages/Newsfeedcontainer/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container>">
          <Navbar/>
<<<<<<< HEAD
         
=======
          <Route exact path="/login" component={Login} />
          <Route exact path="/newsfeed" component={Newsfeedcontainer} />
          <Route exact path="/profilebox" component={Profilebox} />
          <Route exact path="/upload" component={Landing} />
>>>>>>> ARSBranch6

          {/* <Newsfeedcontainer/> */}
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/newsfeed" component={Newsfeedcontainer} />
          <Route exact path="/upload" component={Landing} />
            {/* <Profilesetup /> */}
            {/* <Search /> */}
            {/* <Route exact path="/newsfeed" component={Newsfeed} /> */}


          </Switch>
        
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;