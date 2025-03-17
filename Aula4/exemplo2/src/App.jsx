import Botao from './components/Botao'
import HelloWorld from './components/HellowWorld'
import Aluno from './components/Aluno'
import Dados from './components/Dados'
import Contador from './components/Contador'
import Formulario from './components/Formulario'

function App() {
  

  return (
    <>
    <HelloWorld/>   
    <Botao/>
    <Aluno nome="Fiap" idade="20"/>
    <Dados usuario="cidade" email="cidade@email.com"/>
    <Contador/>
    <Formulario/>
    </>
  )
}

export default App
