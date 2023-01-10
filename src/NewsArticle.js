import React from "react";
import { useParams , useHistory } from "react-router-dom";

function NewsArticle({articles , onRemoveArticle}){

    const history = useHistory(); 
    const {articleId} = useParams();
    const article = articles.filter(a => a.id === parseFloat(articleId))[0];
    console.log(article)

    function handleDeleteClick(){
        fetch(`https://phase-2-project-db.onrender.com/articles/${article.id}` ,{
            method: "DELETE"
        })
        .then(resp=> resp.json())
        .then(() =>{
            onRemoveArticle(article);
            history.push("/news");
        })
    }


    const currentTime = Date(article.publishedAt).toString();


    // const currentTime = article.publishedAt.substring(0,10)
    // console.log(currentTime)

    return (
        <div>
        <article>
            <ul>
                <li>{article.title}</li>
                <li>From: {article.source.name}</li>
                <li>Reported By: {article.author}</li>
                <li>Posted {currentTime}</li>
                <li>{article.description}</li>
                <img className="imgFull" src={article.urlToImage} />
                <li>Short Summary: {article.content}</li>
                <li>Rest of the story at: <a href={article.url}>{article.url}</a> </li>
            </ul>
            <button onClick={handleDeleteClick} > Remove Article </button>
        </article>
        </div>
    )
}

export default NewsArticle