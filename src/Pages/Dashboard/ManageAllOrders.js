import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const ManageAllOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('https://salty-island-81432.herokuapp.com/order', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-secondary'>All Orders {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Order Count</th>
                            <th>Product Name</th>
                            <th>User Email</th>
                            <th>Phone</th>
                            <th>Order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.userPhone}</td>
                                <td>{order.orderQuantity}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageAllOrders