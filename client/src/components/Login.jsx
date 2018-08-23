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

    //use same comments from Register.jsx

    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="login">

                    <h2 className="login-header">Log in</h2>

                    <form className="login-container" onSubmit={(e) => {
                        e.preventDefault();
                        this.props.handleLoginSubmit(
                            this.state.username,
                            this.state.password
                        );
                        this.props.handleLinks('landing page');
                    }
                    } >
                        <p><input type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange} /></p>
                        <p><input type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} /></p>
                        <p><input type="submit" value="Log in" /></p>
                        <div>Not Registered?</div>
                        <p><input type="submit" value="Register" onClick={(e) => {
                            e.preventDefault();
                            this.props.handleLinks('register page')}
                            } /></p>
                    </form>
                </div>
            </div>
        )
    };
}

export default Login;
