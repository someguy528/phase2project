import React from "react";
import NewsArticle from "./NewsArticle";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import NewsList from "./NewsList";
import NewsArticleEdit from "./NewsArticleEdit";
import NewsAddArticle from "./NewsAddArticle";

function News({ articles, onRemoveArticle, onEditArticle, onAddArticle }) {

    const match = useRouteMatch();

    return (
        <div>
            <h1>News</h1>
            <Switch>
                <Route exact path={`${match.url}`} >
                    <NewsList articles={articles}  />
                </Route>
                <Route exact path={`${match.url}/addarticle`} >
                    <NewsAddArticle onAddArticle={onAddArticle} />
                </Route>
                <Route exact path={`${match.url}/:articleId`} >
                    <NewsArticle articles={articles} onRemoveArticle={onRemoveArticle} />
                </Route>
                <Route exact path={`${match.url}/:articleId/edit`} >
                    <NewsArticleEdit articles={articles} onEditArticle={onEditArticle} />
                </Route>
            </Switch>
            <section>

            </section>
        </div>
    )

};

export default News