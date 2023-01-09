import React from "react";

function NewsArticle({article , onRemoveArticle}){

//    const {id, author, title, description, url, urlToImage, publishedAt, content} = article;
    // const source = article.source.name;
    function handleDeleteClick(){
        fetch(`https://phase-2-project-db.onrender.com/articles/${article.id}` ,{
            method: "DELETE"
        })
        .then(resp=> resp.json())
        .then(() =>onRemoveArticle(article))
    }

    return (
        <div>
        <article>
            <ul>
                {/* <li>Article {article.id}</li> */}
                <li>{article.title}</li>
                <li>{article.source.name}</li>
                <li>Reported By: {article.author}</li>
                <li>{article.publishedAt} </li>
                <li>{article.description}</li>
                {/* <li>{urlToImage}</li> */}
                <img src={article.urlToImage} />
                <li>Short Summary: {article.content}</li>
                <li>Rest of the story at: <a href={article.url}>{article.url}</a> </li>
            </ul>
            <button onClick={handleDeleteClick} > Remove Article </button>
        </article>
        </div>
    )
}

export default NewsArticle