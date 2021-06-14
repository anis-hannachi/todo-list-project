import React, { Component } from 'react';
import axios from 'axios';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            password_confirmations: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    handleSubmit(event) {
        const {
            name,
            password,
            password_confirmations
        } = this.state;

        axios.post("http://localhost:1340/registration", {
            user: {
                name: name,
                password: password,
                password_confirmations: password_confirmations
            }
        },
            { mode: "no-cors" },
            { withCredentials: true })
            .then(response => {
                console.log("user registred", response)
            })
            .catch(err => {
                console.log("regestration error", err)
            })
        event.preventDefault();
    }

    handelChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="name"
                        name="name"
                        placeholder="User Name"
                        onChange={this.handelChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handelChange}
                        required
                    />

                    <input
                        type="password"
                        name="password_confirmations"
                        placeholder="Password confirmations"
                        onChange={this.handelChange}
                        required
                    />

                    <button type="submit">Register</button>

                </form>
                
            </div>
        )
    }
}

export default Register;
