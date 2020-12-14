import React, {Component, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import api from "../api";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid: '',
            pw: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChangeInputUserID = async event => {
        const userid = event.target.value
        this.setState({ userid })
    }

    handleChangeInputPassword = async event => {
        const pw = event.target.value
        this.setState({ pw })
    }

    handleLoginUser = async () => {
        const {userid,pw} = this.state
        const id = {userid,pw}

        await api.getUserByUserId(id).then(res => {
            window.alert(`User login successfully`)
            this.setState({
                userid: '',
                pw: '',
            })
        })
    }

    render() {
        const { userid, pw } = this.state
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={userid}
                            onChange={this.handleChangeInputUserID}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={pw}
                            onChange={this.handleChangeInputPassword}
                        />
                    </Form.Group>
                    <Button onClick={this.handleLoginUser} block size="lg" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login