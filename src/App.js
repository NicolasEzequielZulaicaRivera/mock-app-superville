import Home from 'main/components/Home/Home';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './main/components/Login/Login';
import Navbar from './main/components/Navbar/Navbar';
import PrivateRoute from './main/components/util/PrivateRoute';

function App() {
    return (
        <BrowserRouter>
        <div className="app">
            <Navbar />
            <Switch>
                <Route path={'/login'} component={Login}/>
                <PrivateRoute path={'/'} component={Home}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}



export default App;
