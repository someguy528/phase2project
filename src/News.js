import React from "react";
import { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import NewsList from "./NewsList";
import NewsArticleEdit from "./NewsArticleEdit";
import NewsAddArticle from "./NewsAddArticle";

function News() {

    const route = useRouteMatch().url;
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

    function handleAddArticle(newArticle) {
        setArticles([...articles, newArticle]);
    };

    function handleEditArticle(changedArticle) {
        const updatedArticles = articles.map(article => {
            if (article.id === changedArticle.id) {
                return changedArticle
            }
            return article
        });
        setArticles(updatedArticles)
    };

    function handleRemoveArticle(removedArticle) {
        const updatedArticles = articles.filter(article => article.id !== removedArticle.id);
        setArticles(updatedArticles);
    };

    if (!newsLoaded) return <h1>Loading</h1>;


    return (
        <div>
            <h1>News</h1>
            <section>
                <Switch>
                    <Route exact path={`${route}`} >
                        <NewsList articles={articles} />
                    </Route>
                    <Route exact path={`${route}/addarticle`} >
                        <NewsAddArticle onAddArticle={handleAddArticle} />
                    </Route>
                    <Route exact path={`${route}/:articleId`} >
                        <NewsArticle articles={articles} onRemoveArticle={handleRemoveArticle} />
                    </Route>
                    <Route exact path={`${route}/:articleId/edit`} >
                        <NewsArticleEdit articles={articles} onEditArticle={handleEditArticle} />
                    </Route>
                </Switch>
            </section>
        </div>
    )

};

export default News