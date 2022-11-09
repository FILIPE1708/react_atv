import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Mensage from "./pages/Message";
import Index from "./pages/Index";

export default function MainRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/message" component={Mensage} />
                </Switch>
            </div>
        </Router>
    );
}