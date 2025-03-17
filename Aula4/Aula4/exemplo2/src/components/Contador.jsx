import {useState} from 'react'

function Contador(){

    //HOOK - useState - MANIPULA O ESTADO DA VARIAVEL
    const [contador,setContador]=useState(0);

    return (
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={()=>setContador(contador +1)}>Aumentar</button>
        <button onClick={()=>setContador(contador -1)}>Diminuir</button>
        </>
    )
}
export default Contador