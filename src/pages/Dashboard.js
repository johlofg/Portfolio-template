import {React, useState} from 'react'
import styled from "styled-components"

import AddProject from "../componentsAdmin/AddProject"
import Projectlist from "../componentsAdmin/ProjectList"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
  height: 80%;
  background: #fff;
  margin: 100px auto 0;
  border: 1px solid rgba(0, 0, 0, 0.274);
`
const BtnContainer = styled.div`
display: flex;
width: 100%;
`

const Dashboard = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  
  return (
    <Main>
      <BtnContainer>
        <button
          className={toggleState === 1 ?'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}>
            Add Project
        </button>
        <button
          className={toggleState === 2 ?'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}>
            Manage List
        </button>
      </BtnContainer>
      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content active-content' : 'content'}>
          <AddProject />
        </div>
      </div>
      <div className='content-tabs'>
        <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <Projectlist />    
        </div>
      </div>      
    </Main>
  )
}

export default Dashboard