import React, {Component, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreateAccount.css";
import api from "../api";

class CreateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid: '',
            pw: '',
            channelid: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChangeInputUserID = async event => {
        const userid = event.target.value
        this.setState({ userid })

        const channelid = event.target.value
        this.setState({ channelid })
    }

    handleChangeInputPassword = async event => {
        const pw = event.target.value
        this.setState({ pw })
    }

    handleIncludeUser = async () => {
        const {userid, pw, channelid} = this.state
        const payload = {userid, pw, channelid}

        await api.insertUser(payload).then(res => {
            window.alert(`User inserted successfully`)
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
                    <Button onClick={this.handleIncludeUser} block size="lg" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateAccount