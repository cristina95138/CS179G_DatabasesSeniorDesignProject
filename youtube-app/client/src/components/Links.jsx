import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    UCRTube
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/users/Login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/CreateAccount" className="nav-link">
                                Register
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/Channel" className="nav-link">
                                Channel
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/Settings" className="nav-link">
                                Settings
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Upload
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                Search
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/recommendations" className="nav-link">
                                Recommendations
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/trendingvideos" className="nav-link">
                                Trending Videos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/trendingchannels" className="nav-link">
                                Trending Channels
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/" className="nav-link">
                                Logout
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
