import React from "react";
import {useSelector} from "react-redux";
function HijoRepStore() {
    const {boolean}=useSelector(state => state.boolean);
    const {cadenatexto}=useSelector(state => state.cadenaname);
    const {valor}=useSelector(state => state.contador);
    return(
        <div>
            <h1 className='text-center bg-primary text-light'>Store</h1>
            <h1 className='text-center bg-secondary text-light'>Store-Boolean: {`${boolean}`}</h1>
            <h1 className='text-center bg-secondary text-light'>Store-Cadena:{cadenatexto}</h1>
            <h1 className='text-center bg-secondary text-light'>Store-Contador:{valor}</h1>
        </div>

    )

}
export default HijoRepStore;