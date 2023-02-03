import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import user from '../reducers/user'

const DeleteProject = (props) => {

  const [popUp, setPopUp] = useState(false)
  const dispatch = useDispatch() 

  const WarningBox = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    z-index: 100;
    top: 30vh;
    left: 10%; 
    right:10%;
    width: 50%;
    background-color: #FFE4E1;
    border-radius: 25px;
    overflow: hidden;
    padding: 5%;
  `
  const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-evenly;
    width: 40%;
  `

  const MainDash = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0,0,0,0.75);
`
const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
`
const YesBtn = styled.button`
  background-color: green;
  color: #fff;
  border-radius: 10px;
  height: 25px;
  width: 45px;
  :active {
    background-color: #4caf4c;
  }
  :hover {
    box-shadow: 2px 2px 2px grey;
  }
`
const NoBtn = styled.button`
background-color: red;
  color: #fff;
  border-radius: 10px;
  height: 25px;
  width: 45px;

  :active {
    background-color: #a54e4e;
  }
  :hover {
    box-shadow: 2px 2px 2px grey;
  }
`

  const popPopUp = () => {
    setPopUp(!popUp)
    console.log(popUp)
  }
  
  const onDeleteProject = () => {
    dispatch(user.actions.deleteProject(props.delBtn.id))
    setPopUp(!popUp)
  }

  return (
    <div>
      <DeleteBtn type="button" onClick={popPopUp} >❌</DeleteBtn>
      {popUp === true && 
      <MainDash>
      <WarningBox>
        <h2>Are you sure you want to delete {props.delBtn.name}</h2>
        <BtnContainer>
        <YesBtn type="button" onClick={onDeleteProject}>Yes</YesBtn>
        <NoBtn type="button" onClick={popPopUp}>No</NoBtn>
        </BtnContainer>
      </WarningBox>
      </MainDash>
      }
  </div>
  )
}

export default DeleteProject