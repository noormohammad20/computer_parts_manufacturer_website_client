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
                <img style={{ height: '25vh', objectFit: 'cover' }} src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <span>{description}</span>
                <small className='text-2xl font-bold'>Price: <span className='text-primary'>${pricePerPice}</span></small>
                <small className='font-bold '>Minimum Order: <span className='text-primary'> {minimumOrder}</span></small>
                <small className='font-bold '>Available Quantity: <span className='text-primary '>{availableQuantity}</span></small>

                <button
                    style={{
                        marginTop: 'auto',
                        color: '#fff',
                        borderRadius: ' 20px 0px 20px 0px',
                        paddingRight: '1.5rem',
                        paddingLeft: '1.5rem',
                        border: ' none',
                        width: '50%'
                    }}
                    onClick={() => navigateToPurchase(_id)}
                    className="btn btn-accent mx-auto ">Buy Now</button>

            </div>
        </div>
    )
}

export default ProductCards