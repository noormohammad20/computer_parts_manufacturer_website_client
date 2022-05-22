import React from 'react'

const ReviewCard = ({ review }) => {
    const { name, country, reviews, ratings } = review
    return (
        <div className="card w-96 bg-base-100 mb-5 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold text-primary">{name}</h2>
                <h2 className="text-2xl text-center font-bold text-accent">{country}</h2>
                <p>{reviews}</p>
                <small>Ratings: {ratings}</small>
            </div>
        </div>
    )
}

export default ReviewCard