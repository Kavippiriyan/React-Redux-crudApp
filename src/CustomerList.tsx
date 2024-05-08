import React from 'react'
import { useSelector } from 'react-redux'
import { deletecustomer } from './slice/CustomerSlice'
import { UseDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'


const CustomerList = () => {
    const customers = useSelector((state: any) => state.customers)
    const dispatch = useDispatch();

    const deletehandler = (index: any) => {
        dispatch(deletecustomer(index))
    }

    return (
        <div>
            <h1>Customer List</h1>
            <ul style={{ listStyle: 'none' }}>
                {customers.map((customerlist: any, index: any) => (
                    <li>
                        {customerlist} <button onClick={() => deletehandler(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList