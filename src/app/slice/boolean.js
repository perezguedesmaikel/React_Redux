import {createSlice } from '@reduxjs/toolkit';

export const booleanSlice = createSlice({
    name: 'boolean',
    initialState:{
        boolean:false
    },

    reducers: {
        setboolean:(state,action)=>{
            state.boolean=action.payload;
        }

    },

});
export default booleanSlice.reducer;
export const { setboolean}=booleanSlice.actions;
//función que modifican el estado
export const cambiarEstadoBooleana=(val)=>(dispatch)=>{
    dispatch(setboolean(val));
}