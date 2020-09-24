import React from 'react';

import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {

    state = {
      email: '',
      password: ''
    }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FromInput name='email' type='email' value={this.state.email} label='email' required handleChange={this.handleChange}/>
          <FromInput name='password' type='password' value={this.state.password} label='password' required handleChange={this.handleChange}/>

          <CustomButton type='submit'> Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign with google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;