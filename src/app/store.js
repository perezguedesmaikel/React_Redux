import { configureStore } from '@reduxjs/toolkit';
import booleanSlice from "./slice/boolean";
import cadenaSlice from "./slice/cadenaSlice";
import contadorSlice from "./slice/contadorSlice";


export const store = configureStore({
  reducer: {
    boolean:booleanSlice,
    cadenaname:cadenaSlice,
    contador:contadorSlice
  }
});
