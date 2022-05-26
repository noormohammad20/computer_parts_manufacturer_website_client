import React from 'react'

const ReviewCard = ({ review }) => {
    const { name, review: reviews, rating } = review
    return (
        <div className="card w-96 bg-base-100 mb-5 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold text-primary">name: {name}</h2>
                <p className='text-md text-secondary font-bold'>review:  {reviews}</p>
                <small className='text-xl'>ratings: <span className='font-bold text-green-500'>{rating}</span></small>
            </div>
        </div>
    )
}

export default ReviewCard