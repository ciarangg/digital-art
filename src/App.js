import React from 'react';
import './App.css';


import {Switch, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


import Nav from './Components/Nav'

import HomePage from './Components/HomePage';
import ArtList from './Components/ArtList'
import ArtistList from './Components/ArtistList'
import Catalog from './Components/ArtList'
import Embassy from './Components/Embassy'
import EventsList from './Components/EventsList'

function App() {
  return (
    <Router>
      <div className="App">

          <Nav />
        
          <Route exact path="/" component={HomePage}/>
          <Route path="/art" component={ArtList} />
          <Route path="/artists" component={ArtistList}/>
          <Route path="/events" component={EventsList}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/embassy" component={Embassy}/>
        
      </div>
    </Router>
  );
}

export default App;


