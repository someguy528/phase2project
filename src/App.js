import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import News from "./News";
import AddArticle from './AddArticle';

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

  function handleAddArticle(newArticle){
    setArticles([...articles, newArticle]); 
  }

  function handleRemoveArticle(removedArticle){
    const updatedArticles = articles.filter(article => article.id !== removedArticle.id );
    setArticles(updatedArticles);
  }

  return (
    <div>
      <Clock />
      <NavBar />
      <Switch>
        <Route path="/news" >
          <News articles={articles} onRemoveArticle={handleRemoveArticle} />
        </Route>
        <Route path="/addarticle" >
          <AddArticle onAddArticle={handleAddArticle} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
