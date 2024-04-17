import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
    return (
        <> 
            <Navbar/>
            <div className="px-3 h-[92vh] py-6 sm:ml-64 mt-14">
                <Outlet />
            </div>
        </>
    )
}

export default Layout