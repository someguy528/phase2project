import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewsAddArticle({onAddArticle}) {

    const [form,setForm] = useState({
        source: "",
        author: "",
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        content: ""
    })

    const history = useHistory();

    function handleChangeForm(event){
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
        console.log(form)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submitted");
        const time = new Date();
        const formattedTime = time.toISOString();
        fetch("https://phase-2-project-db.onrender.com/articles", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                source: {
                    id:null,
                    name: form.source
                },
                author: form.author,
                title: form.title,
                description: form.description,
                url: form.url,
                urlToImage: form.urlToImage,
                publishedAt: formattedTime,
                content: form.content,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            onAddArticle(data);
            history.push("/news");
         })

    }

    return (
        <div>
            <h1>Add an Article</h1>
            <form>
                <label> Source: </label> 
                <input type="text" value={form.source} onChange={handleChangeForm} name="source" /> 
                <label> Author: </label>
                <input type="text" value={form.author} onChange={handleChangeForm} name="author" /> 
                <label> Title: </label>
                <input type="text" value={form.title} onChange={handleChangeForm} name="title" /> 
                <label> Short Description: </label>
                <input type="text" value={form.description} onChange={handleChangeForm} name="description" /> 
                <label> News Url: </label>
                <input type="text" value={form.url} onChange={handleChangeForm} name="url" /> 
                <label> Url to Image: </label>
                <input type="text" value={form.urlToImage} onChange={handleChangeForm} name="urlToImage" /> 
                <label> News Content Text Abstract: </label>
                <textarea type="text" value={form.content} onChange={handleChangeForm} name="content" /> 
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default NewsAddArticle