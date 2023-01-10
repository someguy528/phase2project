import React from "react";
import { useParams , useRouteMatch, useHistory, Redirect , Link} from "react-router-dom";

function NewsArticle({articles , onRemoveArticle}){

    const history = useHistory(); 
    const {articleId} = useParams();
    const route = useRouteMatch().url; 

    const article = articles.filter(a => a.id === parseFloat(articleId))[0];
    console.log(route)

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
            <Link to={`${route}/edit`} >Edit Article</Link>
            {/* <button onClick={handleEditSwitchClick} > Edit Article </button> */}
            <button onClick={handleDeleteClick} > Remove Article </button>
        </article>
        </div>
    )
}

export default NewsArticle