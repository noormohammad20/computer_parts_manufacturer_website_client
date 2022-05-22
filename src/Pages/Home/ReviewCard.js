import React from 'react'

const ReviewCard = ({ review }) => {
    const { name, country, reviews, ratings } = review
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-2xl text-center font-bold text-primary">{name}</h2>
                <h2 class="text-2xl text-center font-bold text-accent">{country}</h2>
                <p>{reviews}</p>
                <small>Ratings: {ratings}</small>
            </div>
        </div>
    )
}

export default ReviewCard