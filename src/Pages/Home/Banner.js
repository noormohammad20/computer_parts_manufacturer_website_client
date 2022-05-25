import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'


const Banner = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="hero min-h-[90vh] bg-[url('/src/images/banner.jpg')] bg-cover container mx-auto" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold text-neutral-content"> 20% discount!!</h1>
                    <h1 className="mb-5 text-5xl font-bold text-neutral-content"> and free shipping!!</h1>
                    <p className="mb-5 text-2xl font-bold text-neutral-content"> on your first order.</p>
                    {!user && <Link to="login" className="btn btn-primary">Please Login</Link>}
                </div>
            </div>
        </div>
    )
}

export default Banner