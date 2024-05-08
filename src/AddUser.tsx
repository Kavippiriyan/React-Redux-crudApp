import React, { useState } from 'react'
import CustomerList from './CustomerList'
import { addcustomer as addcustomerAction } from './slice/CustomerSlice'
import { useDispatch } from 'react-redux'

const AddUser = () => {
    const [value, setvalue] = useState("")
    const dispatch = useDispatch()
    // const [valuelist, setvaluelist] = useState<string[]>([])

    const addcustomer = () => {
        if (value) {
            // console.log(valuelist);
            // setvaluelist((previousvalue) => [...previousvalue, value])
            dispatch(addcustomerAction(value))
            setvalue("")


        }
    }
    return (
        <>
            <div>
                <h1>Add User</h1>
                <input type='text' value={value} onChange={(e) => setvalue(e.target.value)}></input>
                <button type='submit' onClick={addcustomer}>add</button>
            </div>
            
        </>
    )
}

export default AddUser
