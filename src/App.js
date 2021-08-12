import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './main/components/Login/Login';
import Navbar from './main/components/Navbar/Navbar';

function App() {
    return (
        <BrowserRouter>
        <div className="app">
            <Navbar />
            <Switch>
                <Route path={'/login'} component={Login}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}



export default App;
