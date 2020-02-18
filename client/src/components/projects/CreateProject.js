import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Write a Post/Project</h5>
          <Form.Group controlId="title" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="Title" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <br/>
          <Form.Group controlId="content" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="Content"/>
          </Form.Group>
          <Button className="btn blue lighten-1" type="submit">
            Create
          </Button>
      </Form>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)