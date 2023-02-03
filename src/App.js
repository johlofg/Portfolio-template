import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'

import user from './reducers/user'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'

const reducer = combineReducers({
  user: user.reducer
})
const store = configureStore({reducer})

const Main = styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh;
`
export const App = () => {
  return (

    <Main>
      <Header />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Login" element={<LogIn />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </Main>

  )
}

export default App
