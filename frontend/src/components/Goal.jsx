import React, { useEffect, useState } from 'react';

function Goal() {

    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData) {
            setUserInfo(userData)
        }
    }, [])

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return 'Good morning';
        } else if (hour >= 12 && hour < 18) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    };


    const currentDate = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <>
            <div>
                <h1 className="text-gray-700 font-bold text-4xl mb-4">
                    {getGreeting()}, {userInfo?.name.split(" ")[0]}
                </h1>
                <span className="text-gray-400 font-medium text-md">
                    {currentDate}
                </span>
            </div>
            <span className='text-gray-400 font-thin text-4xl'>
                What is Your Goal Today?
            </span>
        </>
    )
}

export default Goal