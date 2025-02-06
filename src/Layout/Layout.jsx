import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>


            <div className="w-full h-screen flex">
                <div className="h-screen sm:min-w-[265px]">
                    <Sidebar />
                </div>
                <div className=" h-screen w-full">
                    <Outlet></Outlet>

                </div>
            </div>
        </>
    )
}
