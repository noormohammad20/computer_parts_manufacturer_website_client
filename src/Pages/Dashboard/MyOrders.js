import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={order._id}
                            >
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.userAddress}</td>
                                <td>{order.userPhone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrders