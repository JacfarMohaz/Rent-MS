import { useState } from "react";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function RegisterRents() {

  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState(null);

  const [sn, setSn] = useState("")
  const [siteName, setSiteName] = useState("")
  const [district, setDistrict] = useState("")
  const [landlordName, setLandlordName] = useState("")
  const [phone, setPhone] = useState("")
  const [sitePost, setSitePost] = useState("")
  const [rentCost, setRentCost] = useState("")
  const [file, setFile] = useState(null)

  const navigate = useNavigate()

  const handleRegisterRent = (e) => {
    let formData = new FormData()
    formData.append("sn", sn)
    formData.append("siteName", siteName)
    formData.append("district", district)
    formData.append("landlordName", landlordName)
    formData.append("phone", phone)
    formData.append("startDate", startDate)
    formData.append("endDate", endDate)
    formData.append("sitePost", sitePost)
    formData.append("rentCost", rentCost)
    formData.append("file", file)

    e.preventDefault()
    axios.post("http://localhost:5000/create/rent", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(() => {
      toast("Successfully Rent Rgister", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        onClose: () => navigate("/rents")
    })
    }).catch((error) => console.log(error))
  }


  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setEndDate(null); // Reset endDate when startDate changes
  };

  const handleEndDateChange = (e) => {
    const newDate = new Date(e.target.value);
    if (newDate >= new Date(startDate)) {
      setEndDate(e.target.value);
    } else {
      // Handle invalid case (e.g., endDate before startDate)
      alert('End date must be after start date');
    }
  };

  return <div>
    <h1 className='text-5xl font-semibold pl-4'>Register Rents</h1>
    <form className="max-w-[50em] bg-blue-500 rounded-lg p-10 mx-10 my-8">
      <label className="font-semibold pl-5">SN:</label>
      <input value={sn} onChange={(e) => setSn(e.target.value)} className="w-[14em] h-6 p-1 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="SN" />

      <label className="font-semibold pl-28">SiteName:</label>
      <input value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-[14em] h-6 p-1 mb-8 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="SiteName" /> <br />

      <label className="font-semibold pl-2">Destrict:</label>
      <input value={district} onChange={(e) => setDistrict(e.target.value)} className="w-[12em] h-6 p-1 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="Destrict" />

      <label className="font-semibold pl-24">landlord's name:</label>
      <input value={landlordName} onChange={(e) => setLandlordName(e.target.value)} className="w-[12em] h-6 p-1 mb-8 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="landlord's name" /> <br />

      <label className="font-semibold pl-2">Phone:</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-[12em] h-6 p-1 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="Phone" />

      <label className="font-semibold pl-24">StartDate:</label>
      <input type="date" value={startDate} onChange={handleStartDateChange} min={new Date().toISOString().slice(0, 10)} className="w-[12em] h-6 p-1 mb-8 ml-4 bg-gray-200 outline-none rounded-lg" /> <br />

      <label className="font-semibold pl-2">EnDate:</label>
      <input type="date" value={endDate} onChange={handleEndDateChange} min={startDate} disabled={!startDate} className="w-[12em] h-6 p-1 ml-4 bg-gray-200 outline-none rounded-lg" />

      <label className="font-semibold pl-28">Site/Post:</label>
      <select value={sitePost} onChange={(e) => setSitePost(e.target.value)} className="w-[12em] h-8 p-1 mb-8 ml-4 bg-gray-200 outline-none rounded-lg">
        <option value="">Select one</option>
        <option value="site">Site</option>
        <option value="post">Post</option>
      </select> <br />

      <label className="font-semibold pl-2">Rent Cost:</label>
      <input value={rentCost} onChange={(e) => setRentCost(e.target.value)} className="w-[12em] h-6 p-1 mb-8 ml-4 bg-gray-200 outline-none rounded-lg" type="text" placeholder="rentCost" />

      <label className="font-semibold pl-20">Contract:</label>
      <input onChange={(e) => setFile(e.target.files[0])} className="w-[16em] h-10 p-2 ml-4 bg-gray-200 file:bg-cyan-400 file:border-none outline-none rounded-lg" type="file" accept=".pdf" /> <br />

      <button onClick={handleRegisterRent} className="px-6 py-2 text-xl text-white bg-cyan-400 rounded-lg">Save Data</button>
    </form>

    <ToastContainer />

  </div>
}

export default RegisterRents
