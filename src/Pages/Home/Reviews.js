import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://salty-island-81432.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-accent text-center font-bold mt-20 mb-5'>Reviews</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map((review, index) => <ReviewCard
                        key={index}
                        review={review}
                    ></ReviewCard>)
                }

            </div>
        </div>
    )
}

export default Reviews