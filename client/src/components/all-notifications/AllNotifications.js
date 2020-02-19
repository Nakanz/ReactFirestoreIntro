import React, { Component } from 'react'
import Notifications from '../dashboard/Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class AllNotifications extends Component {
    
  render() {
    const { auth, notifications} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />  
    return (
        <MDBContainer>
          <MDBRow>
            <MDBCol xs={6}>
                  <Notifications notifications={notifications} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notification
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notification', orderBy: ['time', 'desc']}
  ])
)(AllNotifications)