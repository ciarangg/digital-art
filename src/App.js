import React from 'react';
import './App.css';


// import {Switch, Route} from "react-router-dom";

import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Particles from 'react-particles-js'


import Nav from './Components/Nav'
import HomePage from './Components/HomePage'
import About from './Components/About'
import ArtList from './Components/ArtList'
import ArtistList from './Components/ArtistList'
import Catalog from './Components/Catalog'
import Embassy from './Components/Embassy'
import EventsList from './Components/EventsList'



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

          
          <Particles />
          


          {/* <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'pathseg.js'
                    }
                }} /> */}
        
      </div>
    </Router>
  );
}

export default App;


