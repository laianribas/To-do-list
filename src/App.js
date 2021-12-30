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
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em análise">
            <Item />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em Execução">
            <Item />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Em Teste">
            <Item />
          </CardTasks>
        </Container>
        <Container>
          <CardTasks title="Concluídas">
            <Item />
          </CardTasks>
        </Container>
      </Wrapper>
    </div>
  )
}

export default App
