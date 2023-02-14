import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: 110%;
margin: 5px 0;
`

const InfoInput = (props) => {
  return (
    <div>
      <Input
          type="text"
          value={props.value}
          onChange={(event) => props.func(event.target.value)}>
        </Input>
    </div>
  )
}

export default InfoInput
