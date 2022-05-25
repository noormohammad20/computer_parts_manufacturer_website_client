import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ({ product }) => {
    const { _id, name, image, description, pricePerPice, minimumOrder, availableQuantity } = product
    const navigate = useNavigate()
    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl mb-5 ">
            <figure className="px-3 pt-3">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <span>{description}</span>
                <small className='text-2xl font-bold'>Price: <span className='text-primary'>${pricePerPice}</span></small>
                <small className='font-bold '>Minimum Order: <span className='text-primary'> {minimumOrder}</span></small>
                <small className='font-bold '>Available Quantity: <span className='text-primary '>{availableQuantity}</span></small>
                <div className="card-actions">
                    <button
                        onClick={() => navigateToPurchase(_id)}
                        className="btn btn-primary w-64 inline-block mx-auto ">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCards