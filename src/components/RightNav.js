
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;  
  margin-bottom: 0;
  padding: 0;

  li {
    padding: 5px 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FFE4E1;
    position: fixed;
    bottom: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};      
    width: 100vw;        
  }
`

const RightNav = ({ open }) => {
  console.log(open)

  return (
    <Ul open={open}>
      <Link to="/">
        <li>Portfolio</li>
      </Link>
      <Link to="/About">
        <li>About</li>
      </Link>
    </Ul>
  )
}

export default RightNav