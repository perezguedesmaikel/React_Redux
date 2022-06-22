import React from "react";
import Bisnieta from "./Bisnieta";
import Bisnieto from "./bisnieto";
import {useDispatch, useSelector} from "react-redux";
import {cambiarEstadoBooleana} from "../app/slice/boolean";
import {cambiarEstadoCadenaTexto} from "../app/slice/cadenaSlice";
import {cambiarValor} from "../app/slice/contadorSlice";

function Nieta() {
    const dispatch=useDispatch();
    const {boolean}=useSelector(state => state.boolean);
    const {valor}=useSelector(state => state.contador);
    function CambairEstado() {
        dispatch(cambiarValor(valor+1));
        dispatch(cambiarEstadoCadenaTexto('Desde la Nieta'));
        boolean?dispatch(cambiarEstadoBooleana(false)):dispatch(cambiarEstadoBooleana(true));
    }
    return(
        <div className='border border-secondary p-3'><h4>Nieta</h4>
            <button className='btn btn-secondary' onClick={CambairEstado}>Nieta</button>
            <Bisnieta/>
            <Bisnieto/>
        </div>

    )

}
export default Nieta;