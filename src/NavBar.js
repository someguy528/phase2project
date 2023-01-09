import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function NavBar(){

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
            <NavLink exact to="/" style={defaultStyle} activeStyle={clickedStyle} >
                Home Page
            </NavLink>
            <NavLink to="/news" style={defaultStyle} activeStyle={clickedStyle} >
                Current News
            </NavLink>
        </div>
    )
};

export default NavBar