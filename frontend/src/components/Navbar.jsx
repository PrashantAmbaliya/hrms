import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosPeople } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { useEffect } from 'react';

function Navbar() {
    const [isDropdownOpen, setisDropdownOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData) {
            setUserInfo(userData)
        }
    }, [])

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
                <div className="px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link to="/dashboard" className="flex ms-2 md:me-24">
                                <img src="https://media.istockphoto.com/id/871461336/vector/icon-for-business-management-recruitment-of-employees-team-work.jpg?s=612x612&w=0&k=20&c=FRna_epaMZsMGJN8ubve0pvEStVWQNzIyMy0lla91Ow=" class="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center font-bold text-2xl sm:text-2xl whitespace-nowrap text-black">
                                    HRMS
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <span className="font-semibold text-gray-900 hover:text-blue-600">Hi {userInfo && userInfo.name.split(" ")[0]}</span>
                            </div>
                            <div className="flex items-center ms-3">
                                <div>
                                    <button onClick={() => setisDropdownOpen(!isDropdownOpen)}
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="/profilepic.jpg" alt="user" />
                                    </button>
                                </div>
                                <div className={`z-50  my-4 ${!isDropdownOpen && "hidden"} absolute top-9 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-white" role="none">
                                            {userInfo && userInfo.name}
                                        </p>
                                        <p className="text-sm font-medium text-white" role="none">
                                            {userInfo && userInfo.email}
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                                        </li>
                                        <li>
                                            <span className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? '' : '-translate-x-full'
                    } bg-white border-r border-gray-200 sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full pb-4 overflow-y-auto bg-white">
                    <ul className=" font-medium Sidebar">

                        <li>
                            <NavLink to='dashboard' className={`flex items-center p-4 text-gray-900 group hover:bg-[#ebeef1]`}>
                                <MdSpaceDashboard className='h-6 w-6' />
                                <span className="ms-3">Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='employee' className={`flex items-center p-4 text-gray-900 group hover:bg-[#ebeef1]`}>
                                <IoIosPeople className='h-6 w-6' />
                                <span className="ms-3">Employee</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Navbar