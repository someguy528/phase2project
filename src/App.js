import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import News from "./News";

function App() {
  const [articles, setArticles] = useState([]);

  function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 1000);
    }, []);
    return <div>The Date is: {time.toString()}</div>;
  };

  useEffect(() => {
    fetch("https://phase-2-project-db.onrender.com/articles")
      .then(resp => resp.json())
      .then(data => setArticles(data))
  }, [])

  return (
    <div>
      <Clock />
      <NavBar />
      <Switch>
        <Route path="/news" >
          <News articles={articles} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
