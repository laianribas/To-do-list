import React from 'react'
import Button from '../Button'
import './style.scss'

const CardForm = props => {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Novo item"
          aria-label="Novo item"
          aria-describedby="button-addon2"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Descrição"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <select
        className="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option selected>Selecionar Funcionalidade</option>
        <option value="1">Cadastro</option>
        <option value="2">Login</option>
        <option value="3">Trocar a senha</option>
      </select>
      <div className="container-fluid">
        <p>Prioridade:</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Baixa
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Média
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault3">
            Alta
          </label>
        </div>
      </div>
      <Button>Adicionar</Button>
    </div>
  )
}

export default CardForm
