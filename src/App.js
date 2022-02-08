import React from "react";
import { Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";


const App = () =>{
    return(
        <>
                <Route path="/" exact component={Homepage}/>
        </>
    )
}

export default App;