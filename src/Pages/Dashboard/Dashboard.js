import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl text-accent font-bold'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white lg:bg-transparent text-base-content">

                    {!admin && <>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/myReview'>Review</Link></li>
                    </>}
                    <li><Link to='/dashboard'>Add My Profile</Link></li>
                    <li><Link to='/dashboard/loadMyProfile'>My Profile </Link></li>
                    <li><Link to='/dashboard/updateProfile'>Update Profile </Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                        <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    )
}

export default Dashboard