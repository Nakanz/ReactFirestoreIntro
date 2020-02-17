import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">

        <Form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
          <Form.Group controlId="email" onChange={this.handleChange}>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <br/>
          <Form.Group controlId="password" onChange={this.handleChange}>
            <Form.Control type="password" placeholder="Password"/>
            { authError ? <Form.Text className="red-text"> {authError} </Form.Text> : null }
          </Form.Group>
          <Button className="btn blue lighten-1" type="submit">
            Login
          </Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)