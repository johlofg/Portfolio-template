import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import DeleteProject from './DeleteProject'

const ProjectContainer = styled.div`
width: 100%;  
  `
const Project = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: fit-content;
box-shadow: 0 2px 2px 2px grey;
padding: 10px;
margin-top: 5px;
/* border-radius: 15px; */
`

const Projectlist = () => {
  const pList = useSelector(store => store.user.projects) 
  return (
    <ProjectContainer>    
      {pList && pList.map(project => (
        <Project key={project.id}>
          <p>{project.name}</p>  
          <DeleteProject delBtn={project}/>  
      </Project>  
      ))}  
    </ProjectContainer>
  )
}

export default Projectlist