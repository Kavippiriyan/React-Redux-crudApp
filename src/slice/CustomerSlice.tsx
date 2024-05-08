import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []


const CustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:
    {
        addcustomer(state, action) {
            state.push(action.payload)
        },
        deletecustomer(state, action) {
            const deleteIndex = action.payload;
            return  state.filter((value,index)=>index!==deleteIndex)
              
        }
    }

}
)

export const { addcustomer, deletecustomer } = CustomerSlice.actions

export default CustomerSlice.reducer