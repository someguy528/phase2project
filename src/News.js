import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import NewsList from "./NewsList";
import NewsArticleEdit from "./NewsArticleEdit";
import NewsAddArticle from "./NewsAddArticle";

function News({ articles, onRemoveArticle, onEditArticle, onAddArticle}) {

    const route = useRouteMatch().url;

    return (
        <div>
            <h1>News</h1>
            <section>
            <Switch>
                <Route exact path={`${route}`} >
                    <NewsList articles={articles}  />
                </Route>
                <Route exact path={`${route}/addarticle`} >
                    <NewsAddArticle onAddArticle={onAddArticle} />
                </Route>
                <Route exact path={`${route}/:articleId`} >
                    <NewsArticle articles={articles} onRemoveArticle={onRemoveArticle} />
                </Route>
                <Route exact path={`${route}/:articleId/edit`} >
                    <NewsArticleEdit articles={articles} onEditArticle={onEditArticle} />
                </Route>
            </Switch>
            </section>
        </div>
    )

};

export default News