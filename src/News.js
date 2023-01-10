import React from "react";
import NewsArticle from "./NewsArticle";
import {Switch, Route,  Link , useRouteMatch} from "react-router-dom";
import NewsList from "./NewsList";
import NewsArticleEdit from "./NewsArticleEdit";

function News({ articles, onRemoveArticle, onEditArticle }) {
    // const allArticles = articles.map(article => (
    //     <NewsArticle key={article.id} article={article} />
    // ))

    // return (
    //     <div>
    //         <h1>News</h1>
    //         <section>
    //             {articles.map(article => (
    //                 <NewsArticle key={article.id} article={article} onRemoveArticle={onRemoveArticle} />))}
    //         </section>
    //     </div>
    // )

    const match = useRouteMatch();

    return (
        <div>
            <h1>News</h1>
            <Switch>
                <Route exact path="/news" > 
                    <NewsList articles={articles} onRemoveArticle={onRemoveArticle} />
                </Route>
                <Route exact path={`${match.url}/:articleId`} >
                    <NewsArticle articles={articles} onRemoveArticle={onRemoveArticle} />
                </Route>
                <Route path={`${match.url}/:articleId/edit`} >
                    <NewsArticleEdit articles={articles} onEditArticle={onEditArticle} />
                </Route>
            </Switch>
            <section>
                
            </section>
        </div>
    )

};

export default News