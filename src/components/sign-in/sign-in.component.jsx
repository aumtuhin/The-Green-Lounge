import React, { Component } from 'react';
import './sign-in.syles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <CustomButton type="submit" value="Submit Form" >
                        Sign in
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn
