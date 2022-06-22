import {createSlice } from '@reduxjs/toolkit';


export const cadenaSlice = createSlice({
    name: 'cadenaname',
    initialState:{
        cadenatexto:'Store'
    },

    reducers: {
        setCadenaTexto:(state,action)=>{
            state.cadenatexto=action.payload;
        }

    },

});
export default cadenaSlice.reducer;
export const {setCadenaTexto}=cadenaSlice.actions;
//función que modifican el estado
export const cambiarEstadoCadenaTexto=(val)=>(dispatch)=>{
    dispatch(setCadenaTexto(val));
}