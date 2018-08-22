import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h2> New User Registration </h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleRegisterSubmit(
                        this.state.username,
                        this.state.password
                    );
                    this.props.handleLinks('landing page');
                }
                }>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    };
}

export default Register;

