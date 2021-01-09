import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const App=()=>{
    return( 
        <HashRouter>
            <Route exact path="/" component={FirstPage}/>
            <Route path="/second:parm?" component={SecondPage}/>
        </HashRouter>
    );
}

export default App;
