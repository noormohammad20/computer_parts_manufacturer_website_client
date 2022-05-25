import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactStars from 'react-rating-stars-component'
import { toast } from 'react-toastify'


const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const [rating, setRating] = useState(0)


    const onSubmit = async data => {
        const review = {
            name: data.name,
            review: data.review,
            rating: rating,
        }
        fetch('https://salty-island-81432.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('successfully added your review')
                    reset()
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl text-secondary font-bold'>Add Review </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        placeholder="your name"
                        className="input input-bordered"

                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required!'
                            }
                        })}
                    />
                    {errors.name?.type === 'required' && <span className='text-red-500'>
                        {errors.name.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea type="review"
                        placeholder="Your Review"
                        className="input input-bordered"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'review is required!'
                            }
                        })}
                    />
                    {errors.review?.type === 'required' && <span className='text-red-500'>
                        {errors.review.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <ReactStars
                        count={5}
                        onChange={(e) => setRating(e)}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />,

                </div>
                <input className="btn btn-primary form-control w-full max-w-xs mt-2" type="submit" value='Please Add Your Review' />
            </form>
        </div>
    )
}

export default AddReview