import React from 'react'

const OrderDeleteModal = ({ cancelOrder }) => {
    const { productName } = cancelOrder
    return (
        <div>
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You Want To Cancel The Order Of <span className='text-red-500'>{productName}</span>!</h3>

                    <div class="modal-action">
                        <button>Delete</button>
                        <label for="order-delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDeleteModal