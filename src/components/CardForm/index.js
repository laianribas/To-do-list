import React from 'react'
import Item from '../Item'
import './style.scss'

const CardForm = props => {
  return (
    <div class="card">
      <div class="card-header">{props.title}</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Novo item"
          aria-label="Novo item"
          aria-describedby="button-addon2"
        />
      </div>
      <div class="form-group">
        <textarea
          placeholder="Descrição"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option selected>Selecionar Funcionalidade</option>
        <option value="1">Cadastro</option>
        <option value="2">Login</option>
        <option value="3">Trocar a senha</option>
      </select>
      <div class="container-fluid">
        <p>Prioridade:</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Baixa
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Média
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault3">
            Alta
          </label>
        </div>
      </div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Adicionar
      </button>
    </div>
  )
}

export default CardForm
