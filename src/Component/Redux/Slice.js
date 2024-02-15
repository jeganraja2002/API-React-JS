import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"flight",
    initialState:{
        empty:[]
    },
    reducers:{
        update:(state,action)=>{
            state.empty=action.payload
        }
    }
})

export default Slice.reducer
export const{update}=Slice.actions