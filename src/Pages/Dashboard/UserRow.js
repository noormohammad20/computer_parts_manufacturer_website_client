import React from 'react'
import { toast } from 'react-toastify'

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://salty-island-81432.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You cannot make an admin')
                }
                return res.json()

            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Created an Admin')
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button
                onClick={makeAdmin}
                className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs text-black bg-red-500">Remove User</button></td>

        </tr>

    )
}

export default UserRow