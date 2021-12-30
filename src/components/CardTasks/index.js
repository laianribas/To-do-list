import React from 'react'

const CardTasks = props => {
  return (
    <div class="card">
      <div class="card-header">{props.title}</div>
      {props.children}
    </div>
  )
}

export default CardTasks
