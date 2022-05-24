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
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Do You Really Want To Delete {name}!</h3>
                    <div class="modal-action">
                        <button
                            onClick={() => confirmDelete(_id)}
                            class="btn btn-xs btn-error ">Delete</button>
                        <label for="delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal