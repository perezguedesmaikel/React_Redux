import React from "react";
import Bisnieto from "./bisnieto";
import Bisnieta from "./Bisnieta";
import {useDispatch, useSelector} from "react-redux";
import {cambiarEstadoBooleana} from "../app/slice/boolean";
import {cambiarEstadoCadenaTexto} from "../app/slice/cadenaSlice";
import {cambiarValor} from "../app/slice/contadorSlice";

function Nieto() {
    const dispatch=useDispatch();
    const {boolean}=useSelector(state => state.boolean);
    const {valor}=useSelector(state => state.contador);
    function CambairEstado() {
        dispatch(cambiarValor(valor+1));
        dispatch(cambiarEstadoCadenaTexto('Desde el Nieto'));
        boolean?dispatch(cambiarEstadoBooleana(false)):dispatch(cambiarEstadoBooleana(true));
    }
    return(
        <div className='border border-secondary p-3'><h3>Nieto</h3>
            <button className='btn btn-secondary' onClick={CambairEstado}>Nieto</button>
            <Bisnieto/>
            <Bisnieta/>
        </div>

    )

}
export default Nieto;