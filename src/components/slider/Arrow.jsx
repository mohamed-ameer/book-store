import React from 'react'

function Arrow({ handleClick, className }) {
  return (
    <i onClick={handleClick} className={className}></i>
  )
}

export default Arrow
