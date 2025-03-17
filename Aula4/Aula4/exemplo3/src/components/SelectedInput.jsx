import {useRef,useEffect} from 'react';

function SelectedInput(){

    // HOOK- useRef- Memorizar dados selecionados
    const selecionarRef =useRef(null);

    //HOOK -useEffect - é um efeito Colateral 

    useEffect(()=>{
        const seleElemento =selecionarRef.current;

        if(seleElemento){
            seleElemento.addEventListener('change',()=>{
            seleElemento.classList.add('selected');
               
            })
        }

    },[]);


    return (

        <select ref={selecionarRef} name="select">
            <option value="">HTML</option>
            <option value="">CSS</option>
            <option value="">JAVASCRIPT</option>

        </select>
    )
}
export default SelectedInput