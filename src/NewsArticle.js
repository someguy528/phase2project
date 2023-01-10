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
        <article className="article" >
                <h3>{article.title}</h3>
                <h4>From: {article.source.name}</h4>
                <h5>Reported By: {article.author}, Posted {currentTime}</h5>
                <img className="imgFull" src={article.urlToImage} />
                <header>{article.description}</header>
                <p>Short Summary: {article.content}</p>
                <p>Rest of the story at: <a href={article.url}>{article.url}</a> </p>
            <Link className="edit" to={`${route}/edit`} >Edit Article</Link>
            {/* <button onClick={handleEditSwitchClick} > Edit Article </button> */}
            <button onClick={handleDeleteClick} > Remove Article </button>
        </article>
        </div>
    )
}

export default NewsArticle