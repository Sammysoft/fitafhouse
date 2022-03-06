import React from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from './Pages/ContactPage';
import DashboardPage from './Pages/DashboardPage';
import AuthPage from './Pages/AuthPage';


const App = () =>{
    return(
        <>
        <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/ourcompany" exact component={AboutPage}/>
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="*" exact component={AuthPage} />
        </Switch>
        </>
    )
}

export default App;