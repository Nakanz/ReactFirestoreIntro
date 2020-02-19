import React from 'react'
import {MDBCol} from 'mdbreact'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
         
            <Link to={'/project/' + project.id} key={project.id}>
              <MDBCol><ProjectSummary project={project} /></MDBCol>
            </Link>
         
        )
      })}  
    </div>
  )
}

export default ProjectList