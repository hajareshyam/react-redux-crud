import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddPost from "./components/posts/addPost";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
              <Navbar/>
            <div className={`container`}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/auth/login' component={SignIn} />
                <Route path='/auth/register' component={SignUp} />
                <Route path='/post/add' component={AddPost} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
