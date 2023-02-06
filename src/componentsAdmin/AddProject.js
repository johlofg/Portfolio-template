import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import user from '../reducers/user'
import uniqid from 'uniqid'
import styled from 'styled-components'

const AddProject = () => {
const dispatch = useDispatch()
const [newName, setNewName] = useState('')

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
    }    
    // localStorage.setItem('user',JSON.stringify([...action.payload])) 
    dispatch(user.actions.addProject(newProject))
    setNewName('')    
}



  return (
    <>
      <form className='add-project' onSubmit={addProjects}> 
        <label>Customer:</label>      
        <input
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}>
        </input>
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