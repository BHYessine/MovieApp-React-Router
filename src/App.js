import "./App.css";
import React from 'react';
import MovieList from "./Components/MovieList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Movie from "./Components/Movie"

function App() {
    return (
        
            
            <Router>
            <div className="App">  
            <Switch>           
                <Route path="/" exact component={MovieList} />
                <Route path="/movie/:id" component={Movie} />
              </Switch> 
                              
            </div>
          </Router>
            
        
    )
}

export default App
