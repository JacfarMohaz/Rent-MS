import { useState } from "react"
import { NavLink } from "react-router-dom"

function SideNav({ children }) {

    const [isOpen, setIsopen] = useState(false)

    const handleIsOpen = () => {
        setIsopen(true)
    }

    const handleIsClose = () => {
        setIsopen(false)
    }

    const logOut = () => {
        localStorage.clear()
    }

    return <div>

        <div style={{ width: isOpen === true ? "100px" : "" }} className="bg-blue-500 h-screen w-[20%] transition-all duration-500 text-white fixed">
            <i style={{ display: isOpen === true ? "none" : "" }} onClick={handleIsOpen} class="fa-solid text-4xl absolute right-4 fa-xmark"></i>
            <i style={{ display: isOpen === true ? "block" : "" }} onClick={handleIsClose} class="fa-solid text-4xl pl-8 fa-bars hidden"></i>

            <div className="text-2xl flex flex-col space-y-14 pl-10 pt-28">

                <NavLink to="/dashboard">{isOpen === true ? <i class="fa-brands text-2xl fa-microsoft"></i> :
                    <NavLink to="/dashboard"> <i class="fa-brands fa-microsoft"></i> Dashboard</NavLink>}</NavLink>

                <NavLink to="/rents">{isOpen === true ? <i class="fa-solid fa-person-shelter"></i> :
                    <NavLink to="/rents"> <i class="fa-solid fa-person-shelter"></i> Rents</NavLink>}</NavLink>

                <NavLink to="/" onClick={logOut}>{isOpen === true ? <i class="fa-solid text-2xl fa-right-from-bracket"></i> :
                    <NavLink to="/" onClick={logOut}> <i class="fa-solid fa-right-from-bracket"></i> Logout</NavLink>}</NavLink>
            </div>
        </div>

        <div style={{ marginLeft: isOpen === true ? "120px" : "" }} className="ml-[22%] transition-all duration-500">{children}</div>

    </div>
}

export default SideNav