import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name:'home',
    initialState:{
        count:0
    },
    reducers:{
        increment(state,action){
            state.count += action.payload
        },
        decrement(state,action){
            state.count -= action.payload
        }
    } 
})

export default homeSlice.reducer

export const { increment,decrement} = homeSlice.actions