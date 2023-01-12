import React from "react";
import { Link, useHistory } from "react-router-dom";

function NewsList({ articles }) {

    // const history = useHistory();

    const allArticles = articles.map(article => {

        const currentTime = new Date(article.publishedAt).toString();

        // const onNewsClick = () => history.push(`/news/${article.id}`);

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