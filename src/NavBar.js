import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink to="/" >
                Home Page
            </NavLink>
        </div>
    )
};

export default NavBar