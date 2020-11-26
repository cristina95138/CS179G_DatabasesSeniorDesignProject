import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, Login, CreateAccount } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App()  {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Login} exact/>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
