import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import Loading from '../Shared/Loading'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe('pk_test_51L0UwIL7AxqzKmmPbosdUCE6ovKhhw0MlVsYBshVWDcn9HTNGloXhZGn3cwwLs3XzLOIWMKhYhhdi0sdIbvnkWbu00xOlLaiMG')


const Payment = () => {
    const { id } = useParams()
    const url = `https://salty-island-81432.herokuapp.com/order/${id}`

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="card bg-base-100 w-md max-w-md my-14  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Pay For {order.productName}</h2>
                    <p className='text-3xl text-secondary font-bold'>Your Total Price is <span className='text-3xl text-primary font-bold'>${order.price}</span></p>

                </div>
            </div>
            <div className="card flex-shrink-0 w-md max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    )
}

export default Payment