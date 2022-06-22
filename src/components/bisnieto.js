import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {cambiarEstadoBooleana} from "../app/slice/boolean";
import {cambiarEstadoCadenaTexto} from "../app/slice/cadenaSlice";
import {cambiarValor} from "../app/slice/contadorSlice";

function Bisnieto() {
    const dispatch=useDispatch();
    const {boolean}=useSelector(state => state.boolean);

    const {valor}=useSelector(state => state.contador);
    function CambairEstado() {
        dispatch(cambiarValor(valor+1));
        dispatch(cambiarEstadoCadenaTexto('Desde el Bisnieto'));
        boolean?dispatch(cambiarEstadoBooleana(false)):dispatch(cambiarEstadoBooleana(true));
    }
    return(
        <div className='border border-success'><h4>Bisnieto</h4>
            <button className='btn btn-success' onClick={CambairEstado}>Bisnieto</button>
        </div>

    )

}
export default Bisnieto;