import React, { Component } from 'react';

// import {NavLink} from "react-router-dom";
// import logo from "../pics/logo.png"

class Nav extends Component {

    state = { isHide: false };

    hideBar = () => {
       const { isHide } = this.state

       window.scrollY > this.prev ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
    }



    render() {
        
        const classHide = this.state.isHide ? 'hide' : '';

        return ( 
                <div className={`topbar ${classHide}`}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">F=D</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            {/* <NavLink className="nav-link" to="/"> Home </NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/art">Art</a>
                            {/* <NavLink className="nav-link" to="/art"> Art </NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/artists">Artists</a>
                            {/* <NavLink className="nav-link" to="/artists"> Artists </NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                            {/* <NavLink className="nav-link" to="/events"> Events </NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/catalog">Catalog</a>
                            {/* <NavLink className="nav-link" to="/catalog"> Catalog </NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/embassy">Embassy</a>
                            {/* <NavLink className="nav-link" to="/embassy"> Embassy </NavLink> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                            <NavLink className="nav-link" to="/about"> About </NavLink>
                        </li> */}
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