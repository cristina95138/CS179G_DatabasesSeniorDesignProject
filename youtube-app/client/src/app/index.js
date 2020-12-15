import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, Login, CreateAccount, Settings, Channel, Recommendations, TrendingChannels, TrendingVideos } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App()  {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/users/Login" exact component={Login} exact/>
                <Route path="/users/CreateAccount" exact component={CreateAccount} exact/>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
                <Route path="/users/Settings" exact component={Settings} />
                <Route path="/users/Channel" exact component={Channel} />
                <Route path="/users/Recommendations" exact component={Recommendations} />
                <Route path="/movies/TrendingChannels" exact component={TrendingChannels} />
                <Route path="/movies/TrendingVideos" exact component={TrendingVideos} />
            </Switch>
        </Router>
    )
}

export default App
