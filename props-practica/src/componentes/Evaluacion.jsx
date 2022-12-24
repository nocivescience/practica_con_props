import { useState } from "react";

export function Entrada(){
    const [entrada,setEntreda]=useState({item1:'juan'});
    const handleChange=(event)=>{
        let updateValue={item2: event.target.value};
        setEntreda(()=>({
            ...updateValue,
        }))
    }
    return (
        <>
            <h1>Usando mi ejercicio</h1>
            <input type='text' name='item1' defaultValue={entrada.item1} onChange={(e)=>handleChange(e)} />
            <br></br>
            <hr/>
            <label>aca va todo</label>
            <pre>{JSON.stringify(entrada)}</pre>
        </>
    )
}