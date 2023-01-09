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
            <NavLink to="/" activeStyle={clickedStyle} >
                Home Page
            </NavLink>
            <NavLink to="/news" >
                Current News
            </NavLink>
        </div>
    )
};

export default NavBar