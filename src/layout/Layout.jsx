import { Outlet } from "react-router-dom";

export default function Layout() {
    return( <>
        <div className="bg-blue-800 h-[100vh] p-5 text-5xl  "> 
        <div className="mb-5">SUPER ADMIN</div>
        <Outlet />
        </div>
    </>)
}