import React from "react";
import Nieto from "./nieto";
import {useDispatch,useSelector} from "react-redux";
import {cambiarEstadoBooleana} from "../app/slice/boolean";
import {cambiarEstadoCadenaTexto} from "../app/slice/cadenaSlice";
import {cambiarValor} from "../app/slice/contadorSlice";

function Hijo() {
    const dispatch=useDispatch();
    const {boolean}=useSelector(state => state.boolean);
    const {valor}=useSelector(state => state.contador);
    function CambairEstado() {
        dispatch(cambiarValor(valor+1));
        dispatch(cambiarEstadoCadenaTexto('Desde el Hijo'));
        boolean?dispatch(cambiarEstadoBooleana(false)):dispatch(cambiarEstadoBooleana(true));
    }
    return(
        <div className='container border border-primary'>
            <h2>Hijo</h2>
            <button className='btn btn-primary' onClick={CambairEstado}>Hijo</button>
            <Nieto/>
        </div>

    )

}
export default Hijo;