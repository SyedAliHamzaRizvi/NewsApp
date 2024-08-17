import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import LoadusgBar from 'react-top-loading-bar'

const App =()=>{
  const pageSize=10
  const apiKey="346f182d803912afec99d34f347c4c92"
  const country="pk"
 
  const [progress,setProgress]=useState(0)
  
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadusgBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />
        <Switch>
          {/* <Route exact path="/"> <News setProgress={setProgress} key="general" pageSize={5} country={country} category="general"/> </Route>
          <Route exact path="/busess"> <News setProgress={setProgress} key="busess" pageSize={5} country={country} category="busess"/> </Route>
          <Route exact path="/entertausment"> <News setProgress={setProgress} key="entertausment" pageSize={5} country={country} category="entertausment"/> </Route>
          <Route exact path="/health"> <News setProgress={setProgress} key="health" pageSize={5} country={country} category="health"/> </Route>
          <Route exact path="/science"> <News setProgress={setProgress} key="science" pageSize={5} country={country} category="science"/> </Route>
          <Route exact path="/sports"> <News setProgress={setProgress} key="sports" pageSize={5} country={country} category="sports"/> </Route>
          <Route exact path="/technology"> <News setProgress={setProgress} key="technology" pageSize={5} country={country} category="technology"/> </Route> */}

          <Route exact path="/"> <News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country={country}  category="general"/> </Route>
          <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country}  category="business"/> </Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country}  category="entertainment"/> </Route>
          <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country}  category="health"/> </Route>
          <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country}  category="science"/> </Route>
          <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country}  category="sports"/> </Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country}  category="technology"/> </Route>
          


        </Switch>
        </Router>
      </div>
    )
  
}
export default App;


