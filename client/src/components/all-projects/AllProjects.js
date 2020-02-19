import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBDataTable } from 'mdbreact';
import './AllProjects.css'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
class AllProjects extends Component {
    
  render() {
    const { projects, auth} = this.props;
    const data = {
        columns: [
          {
            label: 'Author',
            field: 'author',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Title',
            field: 'title',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Summary',
            field: 'summary',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Posted on',
            field: 'date',
            sort: 'asc',
            width: 150
          }
        ],
        rows: [
          {
            author: 'Tiger Nixon',
            title: 'System Architect',
            summary: 'Edinburgh',
            date: '2011/04/25'
            
          },
          
        ]
      };
    if (!auth.uid) return <Redirect to='/signin' />  
    return (
        <MDBContainer>
        <MDBDataTable className="projects-table"
            striped
            bordered
            hover
            data={data}
            />
          
        </MDBContainer>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
  ])
)(AllProjects)