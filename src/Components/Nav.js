import React, { Component } from 'react';
import {NavLink} from "react-router-dom";



class Nav extends Component {


    


    render() {
    

        return ( 
                <div>


                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">F=D</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul id="alignright" className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"> Home <span className="sr-only">(current)</span> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about"> About </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/art"> Exhibition </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/artists"> Artists </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/events"> Events </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/embassy"> Embassy </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact"> Contact Us </NavLink>
                        </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                    </nav>
                </div>
        );
    }
}

export default Nav