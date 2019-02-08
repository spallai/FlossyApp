import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Landing from "./components/pages/Landing";
import Anewsfeed from "./components/pages/Anewsfeed";
import AppointmentRequest from "./components/pages/AppointmentRequest";
import AUpload from "./components/pages/AUpload";
import Booking from "./components/pages/Booking";
import Search from "./components/pages/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/newsfeed" component={Anewsfeed} />
            <Route exact path="/appointment" component={AppointmentRequest} />
            <Route exact path="/upload" component={AUpload} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/search" component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;




Collapse 


