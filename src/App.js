import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';

function App() {
  function Clock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 1000);
    }, []);
  
    return <div>The Date is: {time.toString()}</div>;
  };

  return (
    <div>
      <Clock />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
         </Route> 
      </Switch>

    </div>
  );
}

export default App;
