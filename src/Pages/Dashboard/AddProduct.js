import React from 'react'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgStorageKey = '973b31c6dcc050bcb8d1db2dd1654620'


    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const img = data.data.url
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        minimumOrder: data.minimumOrder,
                        availableQuantity: data.availableQuantity,
                        img: img
                    }
                }
                console.log('imgbb', data)
            })

    }

    return (
        <div>
            <h2 className='text-3xl text-secondary font-bold'>Add Product</h2>
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
                        <span className="label-text">description</span>
                    </label>
                    <input type="text"
                        placeholder="description"
                        className="input input-bordered"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is required!'
                            }

                        })}
                    />
                    {errors.description?.type === 'required' && <span className='text-red-500'>
                        {errors.description.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price (per-pice)</span>
                    </label>
                    <input type="number"
                        placeholder="Price"
                        className="input input-bordered"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is required!'
                            }

                        })}
                    />
                    {errors.price?.type === 'required' && <span className='text-red-500'>
                        {errors.price.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order</span>
                    </label>
                    <input type="number"
                        placeholder="Minimum Order"
                        className="input input-bordered"
                        {...register("minimumOrder", {
                            required: {
                                value: true,
                                message: 'Minimum Order is required!'
                            }

                        })}
                    />
                    {errors.minimumOrder?.type === 'required' && <span className='text-red-500'>
                        {errors.minimumOrder.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is required!'
                            }

                        })}
                    />
                    {errors.availableQuantity?.type === 'required' && <span className='text-red-500'>
                        {errors.availableQuantity.message}</span>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file"
                        className="input input-bordered"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required!'
                            }
                        })}
                    />
                    {errors.image?.type === 'required' && <span className='text-red-500'>
                        {errors.image.message}</span>}

                </div>


                <input className="btn btn-primary form-control w-full max-w-xs mt-2" type="submit" value='Add Product' />
            </form>
        </div>
    )
}

export default AddProduct