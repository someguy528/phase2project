import React from "react";
import { Link} from "react-router-dom";

function NewsList({ articles, onRemoveArticle }) {
    const allArticles =  articles.map(article => {

        const currentTime = new Date(article.publishedAt).toString();

        // function handleDeleteClick() {
        //     fetch(`https://phase-2-project-db.onrender.com/articles/${article.id}`, {
        //         method: "DELETE"
        //     })
        //         .then(resp => resp.json())
        //         .then(() => onRemoveArticle(article))
        // }

        return (
            <section className="articleSection" key={article.id}>
                <img className="imgPreview" src={article.urlToImage} />
                <Link to={`/news/${article.id}`} > {article.title}  </Link>
                <header>Posted {currentTime}</header>
                {/* <button className="deleteBtn" onClick={handleDeleteClick}> Remove Article </button> */}
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