import React from "react"
import styled from "styled-components"

import AddProject from "../componentsAdmin/AddProject"
import Projectlist from "../componentsAdmin/ProjectList"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dashboard = () => {
  
  return (
    <Main>
      <AddProject />
      <Projectlist />    
    </Main>
  )
}

export default Dashboard