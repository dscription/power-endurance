import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: '90vh';
  /* justify-content: center; */
  /* align-items: center;  */
`;

class LoginPage extends Component {
  state = {
    email: '',
    pw: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state;
    return (
      <Main>
        <h3>Log In</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/">
            Cancel
          </Link>
        </form>
      </Main>
    );
  }
}

export default LoginPage;
