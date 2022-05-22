import React from 'react'

const ProductCards = ({ product }) => {
    const { name, image, description, pricePerPice, minimumOrder, availableQuantity } = product
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl mb-5 ">
            <figure class="px-3 pt-3">
                <img src={image} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <span>{description}</span>
                <small className='text-2xl font-bold'>Price: <span className='text-primary'>${pricePerPice}</span></small>
                <small className='font-bold '>Minimum Order: <span className='text-primary'> {minimumOrder}</span></small>
                <small className='font-bold '>Available Quantity: <span className='text-primary '>{availableQuantity}</span></small>
                <div class="card-actions">
                    <button class="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCards