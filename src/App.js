import BreadTrail from 'main/components/BreadTrail/BreadTrail';
import Cotizar from 'main/components/Cotizar/Cotizar';
import Datos from 'main/components/Datos/Datos';
import Emitir from 'main/components/Emitir/Emitir';
import Home from 'main/components/Home/Home';
import Resultado from 'main/components/Resultado/Resultado';
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
            <BreadTrail />
            <Switch>
                <Route path={'/login'} component={Login}/>
                <PrivateRoute exact path={'/'} component={Home}/>
                <PrivateRoute exact path={'/cotizar'} component={Cotizar}/>
                <PrivateRoute exact path={'/cotizar/datos'} component={Datos}/>
                <PrivateRoute exact path={'/cotizar/resultados'} component={Resultado}/>
                <PrivateRoute exact path={'/cotizar/emitir'} component={Emitir}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}



export default App;
