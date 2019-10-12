// import React from 'react';
import './App.css';
import React, { Component } from 'react';


import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


import Nav from './Components/Nav'
import Bottom from './Components/Bottom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import ArtList from './Components/ArtList'
import ArtistList from './Components/ArtistList'
import Embassy from './Components/Embassy'
import EventsList from './Components/EventsList'
import ContactUs from './Components/ContactUs'

import IndividualArtistPage from './Components/SubComponents/IndividualArtistPage';
import IndividualArtPage from './Components/SubComponents/IndividualArtPage'


  function App() {

    return (

      <Router>
        <div className="App">

            <Nav />

            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={About} />

            <Route path="/art" component={ArtList} />
            <Route path="/art/:title" component={IndividualArtPage}/>

            <Route path="/artists" component={ArtistList}/>
            <Route path="/artists/:name" component={IndividualArtistPage} />

            <Route path="/art/:title/artists/:name" component={IndividualArtPage}/>

            <Route path="/events" component={EventsList}/>
            <Route path="/embassy" component={Embassy}/>
            <Route path="/contact" component={ContactUs}/>

            
            <Bottom />
          
        </div>
      </Router>

    );
  }


export default App;


