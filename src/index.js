import "./reset.css";
import ReactDOM from 'react-dom';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Review from "./components/Review/Review";
import Home from "./components/Home";

function App(){
    const [selectedItems,setSelectedItems] = React.useState([]);
    return(
        <Switch>
            <Route path="/revisar">
                <Review selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
            </Route>
            <Route path="/">
                <Home selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
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