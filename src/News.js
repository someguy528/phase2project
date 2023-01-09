import React from "react";
import NewsArticle from "./NewsArticle";
import { Link } from "react-router-dom";

function News({ articles, onRemoveArticle }) {
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

    return (
        <div>
            <h1>News</h1>
            <section>
                {articles.map(article => (
                    <div key={article.id}>
                        <img className="preview" src={article.urlToImage} /> 
                        <Link to={`/news/${article.id}`} > {article.title} </Link>
                    </div>
                ))}
            </section>
        </div>
    )

};

export default News