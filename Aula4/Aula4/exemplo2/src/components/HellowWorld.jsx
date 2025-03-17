import Botao from './Botao'

function HelloWorld(){

    //DECLARANDO VARIAVEIS
    let nome="Fiap";

    function enviar(){
        alert(`Ola Dev, ${nome}`)
    }

    return (
        <>
        <h1>Seja Bem-Vindo {nome}</h1>
        <button onClick={enviar} >Clique</button>
        <Botao/>

        </>
    )
}
export default HelloWorld