import { useState } from "react"

export function Boton(){
    const [shopCart,setShopCart]=useState({item1:'juice'})
    const handleChange=(e)=>{
        let updateValue={};
        updateValue={item1:e.target.value};
        setShopCart(shopCart=>({
            ...shopCart,
            ...updateValue,
        }))
    }
    return (
        <div>
            <h1>my useState</h1>
            <input type='text' name='item1' defaultValue={shopCart.item1} onChange={(e)=>handleChange(e)}/>
            <br/>
            <label>Salida</label>
            <pre>{JSON.stringify(shopCart)}</pre>
        </div>
    )
}