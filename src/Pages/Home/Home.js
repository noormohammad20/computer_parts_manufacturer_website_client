import React from 'react'
import Banner from './Banner'
import BusinessSummary from './BusinessSummary'
import Products from './Products'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews />
        </div>
    )
}

export default Home