import React from "react";
import { useState } from "react";

function AddArticle() {

    const [form,setForm] = useState({
        source: "",
        author: "",
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        content: ""
    })

    function handleChangeForm(event){
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
        console.log(form)
        // console.log(Date())
        
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submitted");
        const time = new Date();
        console.log(time.toISOString());
    }

    return (
        <div>
            <h1>Add an Article</h1>
            <form>
                <label> Source: </label> 
                <input type="text" onChange={handleChangeForm} name="source" /> 
                <label> Author: </label>
                <input type="text" onChange={handleChangeForm} name="author" /> 
                <label> Title: </label>
                <input type="text" onChange={handleChangeForm} name="title" /> 
                <label> Short Description: </label>
                <input type="text" onChange={handleChangeForm} name="description" /> 
                <label> News Url: </label>
                <input type="text" onChange={handleChangeForm} name="url" /> 
                <label> Url to Image: </label>
                <input type="text" onChange={handleChangeForm} name="urlToImage" /> 
                <label> News Content Text Abstract: </label>
                <textarea type="text" onChange={handleChangeForm} name="content" /> 
                <input type="submit" onClick={handleSubmit} ></input>
            </form>
        </div>
    )
}

export default AddArticle