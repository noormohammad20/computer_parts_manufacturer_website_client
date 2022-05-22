import React from 'react'
import { Link } from 'react-router-dom'

const ProductCards = ({ product }) => {
    const { name, image, description, pricePerPice, minimumOrder, availableQuantity } = product
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
                    <Link to='purchase' className="btn btn-primary">Place Order</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCards