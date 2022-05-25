import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import Best from './Best'
import BusinessSummary from './BusinessSummary'
import OurPromise from './OurPromise'
import Products from './Products'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews />
            <OurPromise />
            <Best />
            <Footer />
        </div>
    )
}

export default Home