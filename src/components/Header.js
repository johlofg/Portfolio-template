import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  )
}

export default Header