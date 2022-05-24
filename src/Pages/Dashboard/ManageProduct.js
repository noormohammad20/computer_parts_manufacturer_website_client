import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const ManageProduct = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/dashboard/manageProduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-secondary'>Manage Products: {products.length}</h2>
        </div>
    )
}

export default ManageProduct