import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Template from '../template/template.js';
import Navbar from '../navbar/navbar.js';
import Home from '../home/home.js';
import Programming from '../programming/programming.js';
import Fabrication from '../fabrication/fabrication.js';
import Resume from '../resume/resume.js';
import Contact from '../contact/contact.js';

class App extends Component {
  render() {
     return (
        <div className="container-fluid full-screen">
            <Navbar />
            <Switch>
                {/* Add new pages/components here after creating them */}
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/programming" render={() => <Programming />} />
                <Route exact path="/fabrication" render={() => <Fabrication />} />
                <Route exact path="/resume" render={() => <Resume />} />
                <Route exact path="/contact" render={() => <Contact />} />
            </Switch>

            <hr className="my-4" />
            <div className="container-fluid text-center">
                <div className="font-weight-light py-3">
                    <p>Created by Jarod Gowgiel</p>
                    <p>Last updated: October 31, 2018</p>
                </div>
            </div>

        </div>
     );
  }
}

export default App;
