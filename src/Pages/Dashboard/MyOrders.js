import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../../Pages/Shared/Loading'
import OrderDeleteModal from './OrderDeleteModal'

const MyOrders = () => {

    const [cancelOrder, setCancelOrder] = useState(null)
    const [user] = useAuthState(auth)

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://salty-island-81432.herokuapp.com/myOrder/${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>

            <h2>Your Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr
                                key={order._id}
                            >
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.userAddress}</td>
                                <td>{order.userPhone}</td>
                                <td>{order.price}</td>
                                <td>
                                    {(order.price && !order.paid) && <>
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>

                                        <label
                                            onClick={() => setCancelOrder(order)}
                                            for="order-delete-modal" className="btn btn-xs btn-error">Cancel</label>

                                    </>}

                                    {(order.price && order.paid) && <div><span className='text-green-500'>Paid</span>
                                        <p>TransactionId:<span className='text-orange-500'>{order.transactionId}</span></p>
                                    </div>}

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <OrderDeleteModal
                    cancelOrder={cancelOrder}
                    refetch={refetch}
                    setCancelOrder={setCancelOrder}
                ></OrderDeleteModal>
            }
        </div>
    )
}

export default MyOrders