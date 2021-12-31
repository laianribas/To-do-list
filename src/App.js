import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import CardForm from './components/CardForm'
import CardTasks from './components/CardTasks'
import Container from './components/Container'
import Header from './components/Header'
import Item from './components/Item'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Container>
          <CardForm title="Adicionar nova tarefa" />
        </Container>
        <Container>
          <CardTasks title="A fazer">
            <Item />
            <Item />
            <Item />
            <Item />
            <Button>Próximo</Button>
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em análise">
            <Item />
            <ButtonGroup />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em Execução">
            <Item />
            <ButtonGroup />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em Teste">
            <Item />
            <ButtonGroup />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Concluídas">
            <Item />
            <Button>Anterior</Button>
          </CardTasks>
        </Container>
      </Wrapper>
    </div>
  )
}

export default App
