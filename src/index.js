import ReactDOM from 'react-dom';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Review from "./components/Review/Review";
import Home from "./components/Home";
import "./estilos/reset.css";
import "./estilos/estilos.css";


function App(){
    return(
        <Switch>
            <Route path="/revisar">
                <Review/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );

}

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.querySelector(".root")
    );