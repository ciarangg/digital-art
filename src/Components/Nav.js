import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import logo from "../pics/logo.png"



class Nav extends Component {


    render() {

        return ( <div>

                    <img src ={logo} alt="logo" height="50px" width="50px" />
                    {/* <NavLink to="/"> home </NavLink> */}
                    <NavLink to="/art"> art </NavLink>
                    <NavLink to="/artists"> artists </NavLink>
                    <NavLink to="/events"> events </NavLink>
                    <NavLink to="/catalog"> catalog </NavLink>
                    <NavLink to="/embassy"> embassy </NavLink> 
                    
                </div>
        );
    }
}

export default Nav