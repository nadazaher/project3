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

//use same comments for Login.jsx


// deconstruct [name] to = username and password out of target - so name and value taken from input in form
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
                    // using this.props of this function because we gave it props in app.jsx switch function 
                    this.props.handleRegisterSubmit(

                        // using this.state because we set state above
                        this.state.username,
                        this.state.password
                    );
                    // rerenders back to landing pag
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

