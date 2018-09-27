import React from 'react'

const Filter = ({active, title, onClick}) => {
  if (active) {
    return(
      <span>
        {title}
      </span>
    )
  }
  return(
    <a
      onClick={onClick}
    >
      {title}
    </a>
  )
}

export default Filter
