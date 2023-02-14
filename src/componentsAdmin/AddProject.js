import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import user from '../reducers/user'
import uniqid from 'uniqid'
import styled from 'styled-components'

import  InfoInput  from '../components/InfoInput'
import  ImageUpload  from '../components/ImageUpload'

const AddProject = () => {
const dispatch = useDispatch()
const [newName, setNewName] = useState('')
const [newCD, setNewCD] = useState('')
const [newPhotographer, setPhotographer] = useState('')
const [newModel, setModel] = useState('')
const [newStylist, setStylist] = useState('')
const [newDesigner, setDesigner] = useState('')
const [newHair, setHair] = useState('')
const [newMakeup, setMakeup] = useState('')
const [newImg, setNewImg] = useState('')

  const AddBtn = styled.button`
  background-color: green;
  color: #fff;
  border-radius: 3px;
  height: 25px;
  width: 45px;
  :active {
    background-color: #4caf4c;
  }
  :hover {
    box-shadow: 2px 2px 2px grey;
  }
`
const addProjects = (event) => {  
    event.preventDefault()    
    // const localStorageProjects = localStorage.getItem('user')    
    const newProject = {
      // ...JSON.parse(localStorageProjects),    
      id: uniqid(),
      name: newName,
      cd: newCD,
      photographer: newPhotographer,
      model: newModel,
      stylist: newStylist,
      designer: newDesigner,
      hair: newHair,
      makeup: newMakeup,
      img: newImg        
    }    
    // localStorage.setItem('user',JSON.stringify([...action.payload])) 
    dispatch(user.actions.addProject(newProject))
    setNewName('')    
    setNewCD('')    
    setPhotographer('')    
    setModel('')    
    setStylist('')    
    setDesigner('')    
    setHair('')    
    setMakeup('')
    setNewImg('')    
}

  return (
    <>
      <form onSubmit={addProjects}> 
        <label>Customer:</label>    
        <InfoInput value={newName}func={setNewName} /> 
        <label>Creative Director:</label>    
        <InfoInput value={newCD}func={setNewCD} />
        <label>Photographer:</label>    
        <InfoInput value={newPhotographer}func={setPhotographer} />
        <label>Model:</label>    
        <InfoInput value={newModel}func={setModel} />
        <label>Stylist:</label>    
        <InfoInput value={newStylist}func={setStylist} />
        <label>Designer:</label>    
        <InfoInput value={newDesigner}func={setDesigner} />
        <label>Hair:</label>    
        <InfoInput value={newHair}func={setHair} />
        <label>Makeup:</label>    
        <InfoInput value={newMakeup}func={setMakeup} />
        <ImageUpload func={setNewImg}/>
        <AddBtn 
          type="submit"            
          disabled={!newName}>
            Add
        </AddBtn>                
      </form>
    </>
  )
}

export default AddProject