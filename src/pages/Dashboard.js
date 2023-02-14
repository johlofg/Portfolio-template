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
  height: 70vh;
  background: #fff;
  margin: 100px auto 0;
  border: 1px solid rgba(0, 0, 0, 0.274);

  @media (min-width:1000px){
    width: 50%;
  }
`
const BtnContainer = styled.div`
display: flex;
width: 100%;
`

const TabBtn = styled.button`
border: none;
`

const ContentTabs = styled.div`
flex-grow: 1;
`


const Dashboard = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  
  return (
    <Main>
      <BtnContainer>
        <TabBtn
          className={toggleState === 1 ?'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}>
            Add Project
        </TabBtn>
        <TabBtn
          className={toggleState === 2 ?'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}>
            Manage List
        </TabBtn>
      </BtnContainer>
      <ContentTabs>
        <div className={toggleState === 1 ? 'content active-content' : 'content'}>
          <AddProject />
        </div>
      </ContentTabs>
      <ContentTabs >
        <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <Projectlist />    
        </div>
      </ContentTabs>      
    </Main>
  )
}

export default Dashboard