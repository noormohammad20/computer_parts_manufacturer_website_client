import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const OrderDeleteModal = ({ cancelOrder, refetch, setCancelOrder }) => {
    const { productName } = cancelOrder
    const [user] = useAuthState(auth)

    const handleDelete = () => {
        fetch(`https://salty-island-81432.herokuapp.com/order/${user.email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('successfully deleted')
                    setCancelOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You Want To Cancel The Order Of <span className='text-red-500'>{productName}</span>!</h3>

                    <div class="modal-action">
                        <label
                            onClick={() => handleDelete()}
                            class="btn btn-xs btn-error">Delete</label>

                        <label for="order-delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDeleteModal