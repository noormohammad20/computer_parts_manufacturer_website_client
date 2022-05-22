import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from "react-hook-form"
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()

    if (user) {
        console.log(user)
    }
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <input className="btn btn-primary form-control w-full max-w-xs mt-6" type="submit" value='Login' />
                            </form>

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

export default Login