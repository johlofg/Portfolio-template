import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import user from '../reducers/user'
import uniqid from 'uniqid'

const AddProject = () => {
const dispatch = useDispatch()
const [newName, setNewName] = useState('')

const addProject = (event) => {  
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
    <div>
      <form className='add-project' onSubmit={addProject}>       
        <input
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}>
        </input>
        <button 
          type="submit"
          className='btn-add'
          disabled={!newName}>
            Add
        </button>
      </form>
    </div>
  )
}

export default AddProject