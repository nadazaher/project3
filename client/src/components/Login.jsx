import React, { Component } from 'react';

class Login extends Component {
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
                <h2> Login </h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleLoginSubmit(
                        this.state.username,
                        this.state.password
                    );
                    this.props.handleLinks('landing page');
                }
                } >
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
                <hr />
                <div>Not Registered?</div>
                <button onClick={() => this.props.handleLinks('register page')} >
                    Register
                  </button>

            </div>
        )
    };
}

export default Login;
