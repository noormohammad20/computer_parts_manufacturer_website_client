import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const [user] = useAuthState(auth)

    const onSubmit = async data => {
        const myProfile = {
            name: user.displayName,
            email: user.email,
            education: data.education,
            location: data.location,
            phoneNumber: data.phoneNumber,
            linkedinProfile: data.linkedinProfile,
        }

        fetch('https://salty-island-81432.herokuapp.com/myProfile', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('successfully added my Profile')
                reset()
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-secondary'>Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        value={user?.displayName}
                        disabled
                        className="input input-bordered"
                    />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input type="text"
                        disabled
                        value={user?.email}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input type="text"
                        placeholder="education"
                        className="input input-bordered"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'education is required!'
                            }

                        })}
                    />
                    {errors.education?.type === 'required' && <span className='text-red-500'>
                        {errors.education.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        placeholder="Location"
                        className="input input-bordered"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location is required!'
                            }

                        })}
                    />
                    {errors.location?.type === 'required' && <span className='text-red-500'>
                        {errors.location.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number"
                        placeholder="Phone Number"
                        className="input input-bordered"
                        {...register("phoneNumber", {
                            required: {
                                value: true,
                                message: 'Phone Number is required!'
                            }

                        })}
                    />
                    {errors.phoneNumber?.type === 'required' && <span className='text-red-500'>
                        {errors.phoneNumber.message}</span>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linkedin Profile</span>
                    </label>
                    <input type="text"
                        placeholder="Linkedin Profile"
                        className="input input-bordered"
                        {...register("linkedinProfile", {
                            required: {
                                value: true,
                                message: 'Linkedin Profile is required!'
                            }

                        })}
                    />
                    {errors.linkedinProfile?.type === 'required' && <span className='text-red-500'>
                        {errors.linkedinProfile.message}</span>}

                </div>



                <input className="btn btn-primary form-control w-full max-w-xs mt-2" type="submit" value='Add Product' />
            </form>
        </div>
    )
}

export default MyProfile