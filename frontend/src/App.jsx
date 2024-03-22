import { Routes, Route, useNavigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SideNav from "./components/Sidenav"
import LogIn from "./pages/Login"
import Rents from "./pages/Rents/Rents"
import RentRegister from "./components/Rents Components/RentRegister"
import { useEffect } from "react"

function App() {

  const isAuth = localStorage.getItem("admin")

  const navigate = useNavigate()

  const handlRefresh = () => {
    if (!isAuth) {
      navigate("/")
    }
  }

  useEffect(() => {
    handlRefresh()
  }, [])

  return <> {isAuth ?
    <SideNav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rents" element={<Rents />} />
        <Route path="/rentsregister" element={<RentRegister />} />
      </Routes>
    </SideNav>
    :
    <Routes>
      <Route path="/" element={<LogIn />} />
    </Routes>
  }
  </>

}

export default App
