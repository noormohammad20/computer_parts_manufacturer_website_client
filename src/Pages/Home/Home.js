import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import BusinessSummary from './BusinessSummary'
import OurPromise from './OurPromise'
import Products from './Products'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews />
            <OurPromise />
            <Footer />
        </div>
    )
}

export default Home