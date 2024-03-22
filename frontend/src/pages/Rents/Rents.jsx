import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RentData from "../../components/Rents Components/RentData";

function Rents() {

  const [rentData, setRentData] = useState([])

  const getRentData = () => {
    axios.get("http://localhost:5000/read/rent").then((res) => {
      setRentData(res.data)
    }).catch((error) => console.log(error))
  }

  const handleSearchRent = (id) => {
    const key = id.target.value
    if (key) {
      axios.get(`http://localhost:5000/search/rent/${key}`).then((res) => {
        setRentData(res.data)
      }).catch((error) => console.log(error))
    }
    else {
      getRentData()
    }
  }

  useEffect(() => {
    getRentData()
  }, [])

  const handleDeleteRent = (id) => {
    axios.delete(`http://localhost:5000/delete/rent/${id}`).then(() => {
      toast("Rent Deleted", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
      })
      getRentData()
    }).catch((error) => console.log(error))
  }

  return <div>

    <div className="py-5 flex justify-between">
      <div>
        <Link to="/rentsregister"><button className="bg-blue-400 px-5 py-2 text-white rounded-lg mb-3">Add Rent</button></Link>
        <form className="mr-5">
          <input onChange={handleSearchRent} className="w-[300px] outline-none h-[50px] border-2 border-blue-400 rounded-lg p-2" type="text" placeholder="Searching Student" />
        </form>
      </div>

      {/* <div className="bg-blue-400 w-80 h-24 mr-5 mt-2 p-2 rounded-lg">
        <input type="file" accept="excel" className="file:bg-blue-400 file:border-cyan-400" /> 
        <button className="bg-cyan-400 px-6 py-1 mt-3 ml-28 rounded-lg">Upload</button>
      </div> */}
    </div>

    <table className="w-full ">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr className="">
          <th className="p-3 text-sm font-semibold tracking-wide text-left">SN</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">SiteName</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">District</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">landlord's name</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Phone</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">SatartDate</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">EndDate</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Site/Post</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Rent Cost</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Contract</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Option</th>
        </tr>
      </thead>

      {
        rentData.length > 0 ? rentData.map((data) => {
          return <RentData rentsDelete={() => handleDeleteRent(data._id)} sn={data.sn} siteName={data.siteName} district={data.district} landlordName={data.landlordName} phone={data.phone} startDate={data.startDate} endDate={data.endDate} sitePost={data.sitePost} rentCost={data.rentCost} Contracts={data.file} />
        })
          :
          <p>There is no data yet</p>
      }

    </table>

    <ToastContainer />
  </div>
}

export default Rents