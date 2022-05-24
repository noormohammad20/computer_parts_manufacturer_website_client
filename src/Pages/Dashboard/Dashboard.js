import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h1 className='text-3xl text-accent font-bold'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myReview'>Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    )
}

export default Dashboard