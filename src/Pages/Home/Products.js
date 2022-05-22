import React, { useEffect, useState } from 'react'
import ProductCards from './ProductCards'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h2 className='text-5xl text-primary text-center font-bold my-6'>Our Products</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    products.map((product, index) => <ProductCards
                        key={index}
                        product={product}
                    ></ProductCards>)
                }

            </div>
        </>
    )
}

export default Products