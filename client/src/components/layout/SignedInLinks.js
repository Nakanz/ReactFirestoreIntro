import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions.js'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/all-posts">All Posts</NavLink></li>
        <li><NavLink to="/all-notifications">All Notifications</NavLink></li>
        <li><NavLink to="/create">New Post</NavLink></li>
        <li><a href="/" onClick={props.signOut}>Logout</a></li>
        <li><NavLink to="/" className="btn btn-floating purple">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)