import {createSlice } from '@reduxjs/toolkit';


export const contadorSlice = createSlice({
    name: 'contador',
    initialState:{
        valor:0
    },

    reducers: {
        setValor:(state,action)=>{
            state.valor=action.payload;
        }

    },

});
export default contadorSlice.reducer;
export const { setValor}=contadorSlice.actions;
//función que modifican el estado
export const cambiarValor=(val)=>(dispatch)=>{
    dispatch(setValor(val));
}