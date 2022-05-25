import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import DeleteModal from './DeleteModal'
import ProductRow from './ProductRow'

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/dashboard/manageProduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-secondary'>Manage Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-5">

                    <thead>
                        <tr>
                            <th>Product Count</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>price Per Piece</th>
                            <th>Minimum Order Quantity</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteModal
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                refetch={refetch}
            ></DeleteModal>}
        </div>
    )
}

export default ManageProduct