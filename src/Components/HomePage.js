import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";





class HomePage extends Component {

    render() {

        return (
            <div>
                <h1>HELLO</h1>

                <NavLink to="/art"> art </NavLink>
                <NavLink to="/artists"> artists </NavLink>
                <NavLink to="/events"> events </NavLink>
                <NavLink to="/catalog"> catalog </NavLink>
                <NavLink to="/embassy"> embassy </NavLink> 

            </div>

        );
    }
}

export default HomePage

