import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart(state,action){
            const existing = state.find(item=>item.id == action.payload.id)
            if (existing){
                existing.quantity++
            }
            else{
            state.push({...action.payload , quantity: 1})}
        },
        deleteCart(state,action) {
            return state.filter(item => item.id !== action.payload)
        },
        increaseqnt(state,action){
          const item = state.find(item=>item.id == action.payload)
          if(item) item.quantity++;
        }, 
        decreaseqnt(state,action){
          const item = state.find(item=>item.id == action.payload)
          if(item) item.quantity--
        }
    }
})

export const {addtoCart , deleteCart , increaseqnt , decreaseqnt} = cartSlice.actions;
export default cartSlice.reducer;