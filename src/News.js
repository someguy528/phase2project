import React from "react";
import NewsArticle from "./NewsArticle";

function News ({articles}){
    const allArticles = articles.map(article => (
        <NewsArticle key={article.id} article={article} />
    ))
    return (
        <div>
            <h1>News</h1>
            <section>{allArticles}</section> 
        </div>
    )
};

export default News