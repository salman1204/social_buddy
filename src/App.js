import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div>
     <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
