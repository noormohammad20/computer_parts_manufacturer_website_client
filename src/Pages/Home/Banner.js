import React from 'react'
import { Link } from 'react-router-dom'


const Banner = () => {
    return (
        <div class="hero min-h-[90vh] bg-[url('/src/images/banner.jpg')] bg-cover" >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center ">
                <div class="max-w-md">
                    <h1 class="mb-5 text-6xl font-bold text-neutral-content"> 20% discount!!</h1>
                    <h1 class="mb-5 text-5xl font-bold text-neutral-content"> and free shipping!!</h1>
                    <p class="mb-5 text-2xl font-bold text-neutral-content"> on your first order.</p>
                    <Link to="login" class="btn btn-primary">Please Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner