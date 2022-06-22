import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {cambiarEstadoBooleana} from "../app/slice/boolean";
import {cambiarEstadoCadenaTexto} from "../app/slice/cadenaSlice";
import {cambiarValor} from "../app/slice/contadorSlice";


function Bisnieta() {
    const dispatch=useDispatch();
    const {boolean}=useSelector(state => state.boolean);
    const {valor}=useSelector(state => state.contador);
    function CambairEstado() {
        dispatch(cambiarValor(valor+1));
        dispatch(cambiarEstadoCadenaTexto('Desde la Bisnieta'));
        boolean?dispatch(cambiarEstadoBooleana(false)):dispatch(cambiarEstadoBooleana(true));
    }
    return(
        <div className='border border-success'><h4>Bisnieta</h4>
            <button className='btn btn-success' onClick={CambairEstado}>Bisnieta</button>
        </div>

    )

}
export default Bisnieta;