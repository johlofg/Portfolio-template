import React from 'react'
import styled from 'styled-components'

import headerLogo from '../assets/logo.jpg'

const HeaderLogo = styled.img`
  width: 100%;
  @media (min-width:1000px){
    width: 30%;
  }  
`

const Logo = () => {
  return (
    <HeaderLogo src={headerLogo} alt="header-logo" />
  )
}

export default Logo