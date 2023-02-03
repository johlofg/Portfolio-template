import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Portfolio = () => {
  const allProjects = useSelector(store => store.user.projects) 
  return (
    <ProjectContainer className='project-container'>    
      {allProjects && allProjects.map(project => (
        <div key={project.id}>
          <p>{project.name}</p>
      </div>  
      ))}  
    </ProjectContainer>
  )
}

export default Portfolio