import React from "react";
import { Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from './Pages/ContactPage';


const App = () =>{
    return(
        <>
                <Route path="/" exact component={Homepage}/>
                <Route path="/ourcompany" exact component={AboutPage}/>
                <Route path="/contact" exact component={ContactPage} />
        </>
    )
}

export default App;