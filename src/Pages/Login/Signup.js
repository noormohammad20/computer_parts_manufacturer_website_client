import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
import Loading from '../Shared/Loading'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const navigate = useNavigate()

    let errorMessage

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    if (user || googleUser) {
        console.log(user || googleUser)
    }
    if (error || googleError || updateError) {
        errorMessage = <span className='text-red-500'>{error?.message || googleError?.message || updateError?.message}</span>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password)
        await updateProfile({ displayName: data?.name })
        navigate('/')
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-7xl font-bold ">Sign Up!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'email is required!'
                                            },
                                            pattern: {
                                                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
                                                message: 'Invalid email!'
                                            }
                                        })}
                                    />
                                    {errors.email?.type === 'required' && <span className='text-red-500'>
                                        {errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-500'>
                                        {errors.email.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'password is required!'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'password must be six characters of longer!'
                                            }
                                        })}
                                    />
                                    {errors.password?.type === 'required' && <span className='text-red-500'>
                                        {errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>
                                        {errors.password.message}</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {errorMessage}
                                <input className="btn btn-primary form-control w-full max-w-xs mt-2" type="submit" value='Signup' />
                            </form>
                            <small>Already have an account? <Link className='text-accent' to='/login'>Please Login</Link></small>
                            <div className="divider">OR</div>
                            <p className="form-control mt-2">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline btn-secondary">
                                    Continue With Google</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup