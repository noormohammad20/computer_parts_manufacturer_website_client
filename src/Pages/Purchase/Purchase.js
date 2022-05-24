import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { _id, name, image, pricePerPice, availableQuantity, minimumOrder, description } = product
    const [user] = useAuthState(auth)
    const [quantity, setQuantity] = useState(false)
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [setProduct, id])

    const handleOrder = e => {
        e.preventDefault()
        const order = {
            productId: _id,
            productName: name,
            userName: user.name,
            userEmail: user.email,
            userPhone: e.target.phone.value,
            userAddress: e.target.address.value,
            orderQuantity: e.target.orderQuantity.value

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully place your order')
            })
    }
    const handleQuantity = (e) => {
        const value = parseInt(e.target.value)
        if (value < minimumOrder || value > availableQuantity) {
            setQuantity(true)
        }
        else {
            setQuantity(false)
        }

    }
    useEffect(() => {
        if (quantity) {
            toast.error(`Sorry You Cannot Order Less than ${minimumOrder} And You Cannot Order More Than The ${availableQuantity} `)
        }
    }, [quantity, minimumOrder, availableQuantity])

    return (
        <div class="hero min-h-screen bg-base-200">
            <form onSubmit={handleOrder}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex justify-center items-center '>
                        <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-2xl font-bold text-center text-secondary mt-2'>Your Info</h1>
                            <div class="card-body">
                                <div class="form-control">
                                    <input disabled type="text" placeholder="email" class="input input-bordered" value={user?.displayName} />
                                </div>

                                <div class="form-control">
                                    <input disabled type="text" class="input input-bordered" value={user?.email} />
                                </div>
                                <div class="form-control">
                                    <input placeholder='Phone' type="number" name="phone" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="address" name="address" class="input input-bordered" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <h1 className='text-3xl text-accent font-bold text-center mt-3'>Product Detail</h1>
                            <figure><img src={image} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">name:{name}</h2>
                                <small className='font-bold'>{description}</small>
                                <p><span className='font-bold'>Price(per unit): ${pricePerPice}</span></p>
                                <p><span className='font-bold'>min order: {minimumOrder} Pice</span></p>
                                <p><span className='font-bold'>available: {availableQuantity} Pice</span></p>

                                <input
                                    onChange={handleQuantity}
                                    type="number"
                                    name='orderQuantity'
                                    minValue={minimumOrder}
                                    placeholder="your quantity" class="input input-bordered form-control" />

                                {
                                    quantity ? <input disabled type="submit" value="confirm order" className="btn btn-secondary w-full max-w-xs " /> : <input type="submit" value="confirm order" className="btn btn-secondary w-full max-w-xs" />
                                }


                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Purchase