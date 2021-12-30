import React from 'react'
import './style.scss'

const Item = () => {
  return (
    <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Tarefa 1</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">descrição</p>
        <small>Funcionalidade</small>
      </a>
    </div>
  )
}

export default Item
