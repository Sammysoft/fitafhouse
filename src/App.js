import React from "react";
import { Route, Switch } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from './Pages/ContactPage';
import DashboardPage from './Pages/DashboardPage';
import ErrorPage from './Pages/ErrorPage';
import Onboarding from "./Pages/Onboarding";
import SignInPage from "./Pages/AuthInPage";
import PasswordAuthPage from "./Pages/PasswordAuthPage";


const App = () =>{
    return(
        <>
        <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/signin" exact compnent={SignInPage} />
                <Route path="/ourcompany" exact component={AboutPage}/>
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="/onboarding" exact component={Onboarding} />
                <Route path="/forgot-password" exact component={PasswordAuthPage} />
                <Route path="*" exact component={ErrorPage} />
        </Switch>
        </>
    )
}

export default App;