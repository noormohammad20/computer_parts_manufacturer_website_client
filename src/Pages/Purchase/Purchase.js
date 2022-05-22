import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'

const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { name, pricePerPice, availableQuantity, minimumOrder, description } = product
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [setProduct, id])
    return (
        <div className='flex justify-center items-center '>
            <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <input disabled type="text" placeholder="email" class="input input-bordered" value={user?.displayName} />
                    </div>

                    <div class="form-control">
                        <input disabled type="text" class="input input-bordered" value={user?.email} />
                    </div>
                    <div class="form-control">
                        <input placeholder='Phone' type="number" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="address" class="input input-bordered" />
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase