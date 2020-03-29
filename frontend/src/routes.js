import React from 'react'

// BrowserRouter: Deve sempre sircundar o retorno
// Route: Configura as rotas
// Switch: Garante que apenas uma rota seja executada por um momento

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>            {/* O react interpreta o path pegando a primeira route que começar com aquele path. Para resolver isso e pegar o Path correto usa-se o exact*/}
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}


