import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function NavBar() {

    const defaultStyle = {
        background: "white",
        color: "black"
    }
    const clickedStyle = {
        background: "blue",
        color: "white"
    }

    return (
        <div>
            <NavLink exact to="/" style={defaultStyle} activeStyle={clickedStyle} className="navLink" >
                Home Page 
            </NavLink>
            <NavLink exact to="/news" style={defaultStyle} activeStyle={clickedStyle} className="navLink" >
                Current News 
            </NavLink>
            <NavLink exact to="/news/addarticle" style={defaultStyle} activeStyle={clickedStyle} className="navLink" >
                Add An Article 
            </NavLink>
        </div>
    )
};

export default NavBar