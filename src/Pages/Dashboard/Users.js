import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import UserRow from './UserRow'

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://salty-island-81432.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="text-3xl text-secondary font-bold">All Users: {users.length}</div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>User Count</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users