import React from 'react'
import { toast } from 'react-toastify'

const DeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct
    const confirmDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('successfully delete the product')
                    setDeleteProduct(null)
                    refetch()
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Do You Really Want To Delete {name}!</h3>
                    <div className="modal-action">
                        <button
                            onClick={() => confirmDelete(_id)}
                            className="btn btn-xs btn-error ">Delete</button>
                        <label for="delete-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal