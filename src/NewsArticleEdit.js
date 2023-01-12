import React from "react";
import { useState } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

function NewsArticleEdit({ articles, onEditArticle }) {
    const articleId = useParams().articleId
    const article = articles.filter(a => a.id === parseFloat(articleId))[0];
    const [editForm, setEditForm] = useState({
        source: article.source.name,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        content: article.content,
    });
    const history = useHistory();
    const route = useRouteMatch().url;

    function handleChangeForm(event) {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        })
        console.log(editForm)
    }

    function handleEditSubmit(event) {
        event.preventDefault();
        fetch(`https://phase-2-project-db.onrender.com/articles/${articleId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: {
                    id: null,
                    name: editForm.source
                },
                author: editForm.author,
                title: editForm.title,
                description: editForm.description,
                url: editForm.url,
                urlToImage: editForm.urlToImage,
                content: editForm.content,
            })
        })
        .then(resp=> resp.json())
        .then(data => {
            onEditArticle(data);
            history.push(route.replace("/edit",""));
        });
    }

    return (
        <div>
            <h1>Edit This Article</h1>
            <form>
                <label> Source: </label>
                <input type="text" value={editForm.source} onChange={handleChangeForm} name="source" />
                <label> Author: </label>
                <input type="text" value={editForm.author} onChange={handleChangeForm} name="author" />
                <label> Title: </label>
                <input type="text" value={editForm.title} onChange={handleChangeForm} name="title" />
                <label> Short Description: </label>
                <input type="text" value={editForm.description} onChange={handleChangeForm} name="description" />
                <label> News Url: </label>
                <input type="text" value={editForm.url} onChange={handleChangeForm} name="url" />
                <label> Url to Image: </label>
                <input type="text" value={editForm.urlToImage} onChange={handleChangeForm} name="urlToImage" />
                <label> News Content Text Abstract: </label>
                <textarea type="text" value={editForm.content} onChange={handleChangeForm} name="content" />
                <input type="submit" onClick={handleEditSubmit} />
            </form>
        </div>
    )
}

export default NewsArticleEdit