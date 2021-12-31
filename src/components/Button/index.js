import React from 'react'

const Button = props => {
  return (
    <button
      className="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      {props.children}
    </button>
  )
}

export default Button
