import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard() {

    const [allSiteRents, setAllSiteRents] = useState([])
    const [totalRentCost, setTotalRentCost] = useState([])

    const getAllSiteRents = () => {
        axios.get("http://localhost:5000/getall/rents").then((res) => {
            setAllSiteRents(res.data.total)
        }).catch((error) => console.log(error))
    }

    const getTotalRentCost = () => {
        axios.get("http://localhost:5000/gettotalcost/rents").then((res) => {
            setTotalRentCost(res.data[0].rentCost)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllSiteRents()
        getTotalRentCost()
    }, [])

    return <div>
        <div className="flex gap-10 justify-center pt-10">
            <div className="border-b-8 text-center border-yellow-300 w-[300px] h-[200px] bg-red-300">
                <i class="fa-solid text-4xl text-cyan-300 mt-5 fa-user"></i>
                <h1 className="text-5xl pt-5 "> {allSiteRents > 0 ? allSiteRents : 0} </h1>
                <h1 className="text-4xl">Total Site Rents</h1>
            </div>
            <div className="border-b-8 text-center border-yellow-300 w-[300px] h-[200px] bg-gray-400">
            <i class="fa-solid text-5xl text-cyan-300 pt-5 fa-dollar-sign"></i>
                <h1 className="text-5xl pt-5 "> ${totalRentCost > 0 ? totalRentCost : 0} </h1>
                <h1 className="text-2xl">Total Rent Cost</h1>
            </div>
        </div>
    </div>
}

export default Dashboard
