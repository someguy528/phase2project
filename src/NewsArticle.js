import React from "react";

function NewsArticle({article}){

   const {id, author, title, description, url, urlToImage, publishedAt, content} = article;
    const source = article.source.name;

    return (
        <div>
        <article>
            <ul>
                <li>Article {id}</li>
                <li>{title}</li>
                <li>{source}</li>
                <li>Reported By: {author}</li>
                <li>{publishedAt} </li>
                <li>{description}</li>
                {/* <li>{urlToImage}</li> */}
                <img src={urlToImage} />
                <li>Short Summary: {content}</li>
                <li>Rest of the story at: <a href={url}>{url}</a> </li>
            </ul>
        </article>
        </div>
    )
}

export default NewsArticle