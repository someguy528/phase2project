import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import News from "./News";

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/news" >
          <News />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
