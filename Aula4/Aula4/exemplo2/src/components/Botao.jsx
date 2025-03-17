

function Botao(){

    //CRIANDO UM  ARROW FUNCTION
    const handleClick=()=>{
        alert("Você clicou no botão Componente")
    }


    return (

        <>
            <button onClick={handleClick}>Botão Componente</button>

        </>
    )
}
export default Botao