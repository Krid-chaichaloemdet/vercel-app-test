import { Outlet } from "react-router-dom";

export default function Layout() {
    return( <>
        <div className="bg-blue-700 h-[100vh] p-5 text-3xl  "> 
        <div className="mb-5 text-white">Test Front-End (Amethyst Solution)</div>
        <Outlet />
        </div>
    </>)
}