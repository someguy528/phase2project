import React from "react";
import { Link } from "react-router-dom";

function NewsList({ articles }) {

    const allArticles = articles.map(article => {

        const currentTime = new Date(article.publishedAt).toString();

        return (
            <section className="articleSection" key={article.id}>
                <img className="imgPreview" src={article.urlToImage} />
                <Link to={`/news/${article.id}`} > {article.title}  </Link>
                <header>Posted {currentTime}</header>

            </section>
        )
    });

    return (
        <div>
            {allArticles}
        </div>
    )
}


export default NewsList