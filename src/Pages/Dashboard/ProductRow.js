import React from 'react'


const ProductRow = ({ product, index, refetch, setDeleteProduct }) => {
    const { name, image, minimumOrder, availableQuantity, pricePerPice } = product



    return (

        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>{pricePerPice}</td>
            <td>{minimumOrder}</td>
            <td>
                <label
                    onClick={() => setDeleteProduct(product)}
                    for="delete-modal" className="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>
    )
}

export default ProductRow