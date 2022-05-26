import React, { useEffect, useState } from 'react'

const LoadMyProfile = () => {
    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`https://salty-island-81432.herokuapp.com/myProfile/`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-primary text-center mb-8'>My Profile</h2>
            <div class="card max-w-sm bg-base-100 mx-auto  p-8  shadow-xl">
                {
                    profile.map((myProf) =>
                        <div class="text-2xl font-bold mt-8 ">
                            <h2 className='mt-4' >Name: {myProf.name}</h2>
                            <p className='mt-4'>Email: {myProf.email}</p>
                            <p className='mt-4'>Education: {myProf.education}</p>
                            <p className='mt-4'>Location: {myProf.location}</p>
                            <p className='mt-4'>PhoneNumber: {myProf.phoneNumber}</p>
                            <p className='mt-4'>Linkedin: {myProf.linkedinProfile
                            }</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LoadMyProfile