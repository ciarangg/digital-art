import React from 'react';
import './App.css';


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
import IndividualArtPage from './Components/SubComponents/IndividualArt/IndividualArtPage'
import Picture from './Components/SubComponents/IndividualArt/Picture'
import ThreeD from './Components/SubComponents/IndividualArt/ThreeD'
import Video from './Components/SubComponents/IndividualArt/Video'

let hello = "hello"




function App() {

  


  return (
    <Router>
      <div className="App">

          <Nav />

          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About}/>

          <Route path="/art" component={ArtList} />
          <Route path="/art/:individualart" component={IndividualArtPage}/>
          {/* <Route path="/art/:individualart/:picture" component={Picture}/>
          <Route path="/art/:individualart/:threed" component={ThreeD}/>
          <Route path="/art/:individualart/:video" component={Video}/> */}

          <Route path="/artists" component={ArtistList}/>
          <Route path="/artists/:name" component={IndividualArtistPage}/>

          <Route path="/events" component={EventsList}/>
          <Route path="/embassy" component={Embassy}/>
          <Route path="/contact" component={ContactUs}/>

          
          <Bottom />
        
      </div>
    </Router>
  );
}

export default App;


