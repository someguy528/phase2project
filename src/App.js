import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import News from "./News";

// import NewsArticle from "./NewsArticle";
// import NewsList from "./NewsList";
// import NewsArticleEdit from "./NewsArticleEdit";
// import NewsAddArticle from "./NewsAddArticle";


function App() {
  const [articles, setArticles] = useState([]);
  const [newsLoaded, setNewsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://phase-2-project-db.onrender.com/articles")
      .then(resp => resp.json())
      .then(data => {
        setArticles(data);
        setNewsLoaded(true);
      })
  }, []);

  function handleAddArticle(newArticle){
    setArticles([...articles, newArticle]); 
  };

  function handleEditArticle(changedArticle){
    const updatedArticles = articles.map(article => {
      if(article.id === changedArticle.id){
        return changedArticle
      }
      return article
    });
    setArticles(updatedArticles)
  };

  function handleRemoveArticle(removedArticle){
    const updatedArticles = articles.filter(article => article.id !== removedArticle.id );
    setArticles(updatedArticles);
  };
  
  if(!newsLoaded) return <h1>Loading</h1>;

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/news" >
          <News articles={articles} onRemoveArticle={handleRemoveArticle} onEditArticle={handleEditArticle} onAddArticle={handleAddArticle} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
