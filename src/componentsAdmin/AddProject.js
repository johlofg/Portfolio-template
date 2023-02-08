import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import user from '../reducers/user'
import uniqid from 'uniqid'
import styled from 'styled-components'
import { InfoInput } from '../components/InfoInput'

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
      makeup: newMakeup        
    }    
    // localStorage.setItem('user',JSON.stringify([...action.payload])) 
    dispatch(user.actions.addProject(newProject))
    setNewName('')    
}

  return (
    <>
      <form className='add-project' onSubmit={addProjects}> 
        <label>Customer:</label>    
        <InfoInput value={newName}func={setNewName} /> 
        <label>Customer:</label>    
        <InfoInput value={newCD}func={setNewCD} />
        <label>Customer:</label>    
        <InfoInput value={newPhotographer}func={setPhotographer} />
        <label>Customer:</label>    
        <InfoInput value={newModel}func={setModel} />
        <label>Customer:</label>    
        <InfoInput value={newStylist}func={setStylist} />
        <label>Customer:</label>    
        <InfoInput value={newDesigner}func={setDesigner} />
        <label>Customer:</label>    
        <InfoInput value={newHair}func={setHair} />
        <label>Customer:</label>    
        <InfoInput value={newMakeup}func={setMakeup} />
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