import useProducts from '../../hooks/useProducts'
import ProductCards from './ProductCards'

const Products = () => {
    const [products] = useProducts()
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-primary text-center font-bold my-6'>Our Products</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    products.slice(1.6).map((product, index) => <ProductCards
                        key={index}
                        product={product}
                    ></ProductCards>)
                }

            </div>
        </div>
    )
}

export default Products