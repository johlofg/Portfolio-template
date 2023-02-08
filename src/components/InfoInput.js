import React from 'react'

export const InfoInput = (props) => {
  return (
    <div>
      <input
          type="text"
          value={props.value}
          onChange={(event) => props.func(event.target.value)}>
        </input>
    </div>
  )
}
