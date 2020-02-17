import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import {Form, Button} from 'react-bootstrap'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
      
        <Form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Register</h5>
          <Form.Group controlId="email" onChange={this.handleChange}>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <br/>
          <Form.Group controlId="password" onChange={this.handleChange}>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <br/>
          <Form.Group controlId="firstName" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <br/>
          <Form.Group controlId="lastName" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="Last Name" />
            { authError ? <Form.Text className="red-text"> {authError} </Form.Text> : null }
          </Form.Group>
          <Button className="btn blue lighten-1" type="submit">
            Register
          </Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
