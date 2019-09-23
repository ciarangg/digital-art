import React from 'react';
import './App.css';


// import {Switch, Route} from "react-router-dom";

import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";



import Nav from './Components/Nav'
import Bottom from './Components/Bottom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import ArtList from './Components/ArtList'
import ArtistList from './Components/ArtistList'
import Catalog from './Components/Catalog'
import Embassy from './Components/Embassy'
import EventsList from './Components/EventsList'
import ContactUs from './Components/ContactUs'

import Bask from './Components/IndividualArt/Bask'
import MonaLisa from './Components/IndividualArt/MonaLisa'



function App() {

  


  return (
    <Router>
      <div className="App">

          <Nav />



          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About} />
          <Route path="/art" component={ArtList} />
          <Route path="/artists" component={ArtistList}/>
          <Route path="/events" component={EventsList}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/embassy" component={Embassy}/>
          <Route path="/contact" component={ContactUs}/>

          <Route path="/bask" component={Bask}/>
          <Route path="/mona-lisa" component={MonaLisa}/>
          
          <Bottom />
        
      </div>
    </Router>
  );
}

export default App;


