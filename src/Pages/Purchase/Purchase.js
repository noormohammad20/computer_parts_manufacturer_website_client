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
        const url = `https://salty-island-81432.herokuapp.com/product/${id}`
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
            email: user.email,
            userPhone: e.target.phone.value,
            userAddress: e.target.address.value,
            orderQuantity: e.target.orderQuantity.value,
            price: pricePerPice * e.target.orderQuantity.value

        }
        fetch('https://salty-island-81432.herokuapp.com/order', {
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
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleOrder}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex justify-center items-center '>
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-3xl font-bold text-center text-primary mt-2'>Your Info</h1>
                            <div className="card-body">
                                <div className="form-control">
                                    <input disabled type="text" placeholder="email" className="input input-bordered" value={user?.displayName} />
                                </div>

                                <div className="form-control">
                                    <input disabled type="text" className="input input-bordered" value={user?.email} />
                                </div>
                                <div className="form-control">
                                    <input placeholder='Phone' type="number" name="phone" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="address" name="address" className="input input-bordered" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <h1 className='text-3xl text-primary font-bold text-center my-3'>Purchase Detail</h1>
                            <img
                                style={{ height: '25vh', objectFit: 'contain' }}
                                src={image} alt={name} />
                            <div className="card-body">
                                <h2 className="card-title">Name: {name}</h2>
                                <small className='font-bold'>Description:  {description}</small>
                                <p><span className='font-bold'>Price(par peace): ${pricePerPice}</span></p>
                                <p><span className='font-bold'>Min Order: {minimumOrder} Pice</span></p>
                                <p><span className='font-bold'>Available: {availableQuantity} Peace</span></p>

                                <input
                                    onChange={handleQuantity}
                                    type="number"
                                    name='orderQuantity'
                                    minValue={minimumOrder}
                                    placeholder="your quantity" className="input input-bordered form-control" />

                                {
                                    quantity ? <input disabled type="submit"
                                        style={{
                                            marginTop: 'auto',
                                            color: '#fff',
                                            borderRadius: ' 20px 0px 20px 0px',
                                            paddingRight: '1.5rem',
                                            paddingLeft: '1.5rem',
                                            border: ' none',
                                            width: '50%'
                                        }}
                                        value="confirm order" className="btn btn-secondary  max-auto " /> : <input type="submit"
                                            style={{
                                                marginTop: 'auto',
                                                color: '#fff',
                                                borderRadius: ' 20px 0px 20px 0px',
                                                paddingRight: '1.5rem',
                                                paddingLeft: '1.5rem',
                                                border: ' none',
                                                width: '50%'
                                            }}
                                            value="confirm order" className="btn btn-secondary mx-auto " />
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