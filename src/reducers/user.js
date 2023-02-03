import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('user')
  ?{
    username: JSON.parse(localStorage.getItem('user')).username,
    accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
    projects: []    
  }
  : {
    username: null,
    accessToken: null,
    projects: []    
  }

  const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addProject: (store,action) => {
        store.projects = [...store.projects,action.payload]               
      },
      deleteProject: (store,action) => {
        const existingProjects = store.projects.filter(projectId => projectId.id !== action.payload)
          store.projects = existingProjects        
      }
    }
  })

  export default user